#!/usr/bin/env bash
set -euo pipefail

# Usage: ./deploy-from-git.sh <git_url> <deploy_dir>
# Example: ./deploy-from-git.sh https://github.com/sobhytfaily/Kidzmondo.git /var/www/kidzmondo

GIT_URL=${1:-}
DEPLOY_DIR=${2:-/var/www/kidzmondo}

if [ -z "$GIT_URL" ]; then
  echo "Git URL is required" >&2
  exit 1
fi

if [ "${EUID}" -eq 0 ]; then
  SUDO=""
else
  SUDO="sudo"
fi

# Ensure parent dir exists
$SUDO mkdir -p "${DEPLOY_DIR}"
$SUDO chown -R "$USER":"$USER" "${DEPLOY_DIR}"

if [ -d "${DEPLOY_DIR}/.git" ]; then
  echo "Repo exists. Pulling latest changes..."
  git -C "${DEPLOY_DIR}" fetch --all
  git -C "${DEPLOY_DIR}" reset --hard origin/main
else
  echo "Cloning repository..."
  git clone "${GIT_URL}" "${DEPLOY_DIR}"
fi

cd "${DEPLOY_DIR}"

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Install dependencies, build, and run via PM2
npm ci
NODE_ENV=production npm run build

# Start with PM2 using the provided config
pm2 start deploy/pm2.config.cjs --env production || pm2 restart kidzmondo --update-env
pm2 save

echo "Deployment complete. Use 'pm2 logs' to tail logs."
