#!/usr/bin/env bash
set -euo pipefail

# This script bootstraps a fresh Ubuntu/Debian server for running Strapi
# - Installs build tools and git
# - Installs Node.js via nvm (uses 20.x by default)
# - Installs PM2 process manager

NODE_VERSION="20"

if [ "${EUID}" -eq 0 ]; then
  SUDO=""
else
  SUDO="sudo"
fi

$SUDO apt-get update -y
$SUDO apt-get install -y curl ca-certificates build-essential git

# Install nvm if not present
if [ ! -d "$HOME/.nvm" ]; then
  curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
fi

# shellcheck disable=SC1091
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

nvm install ${NODE_VERSION}
nvm use ${NODE_VERSION}

# Ensure corepack/yarn optional if needed (not required for npm)
# corepack enable

# Install PM2 globally
npm i -g pm2

pm2 -v
node -v
npm -v

echo "Bootstrap complete. You can now deploy the app."
