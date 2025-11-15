# Production deployment

This app is configured to use SQLite in development and PostgreSQL in production.

## Prerequisites
- Node.js 20.x or later (<= 24.x)
- npm
- PostgreSQL database (with a database and user created)
- Reverse proxy (optional but recommended): Nginx or your platform's equivalent

## 1) Clone and install

```bash
# On the server
git clone https://github.com/sobhytfaily/Kidzmondo.git /var/www/kidzmondo
cd /var/www/kidzmondo
npm ci
```

## 2) Set environment variables

Use `.env.production.example` as a template. For most providers, either set `DATABASE_URL` or the discrete connection vars.

Required secrets:
- `APP_KEYS` (comma-separated 4 values)
- `ADMIN_JWT_SECRET`
- `API_TOKEN_SALT`
- `TRANSFER_TOKEN_SALT`
- `JWT_SECRET`
- `ENCRYPTION_KEY`
- `DATABASE_CLIENT=postgres`
- DB connection (`DATABASE_URL` or individual vars)
- If needed: `DATABASE_SSL=true`

You can place a `.env` file in the project root (don’t commit it) or inject env vars via your process manager.

## 3) Build

```bash
NODE_ENV=production npm run build
```

Alternatively, you can use the helper scripts inside `deploy/scripts/` for a faster setup on a fresh Ubuntu/Debian server.

### Fast path with scripts (Ubuntu/Debian)

On the server, run:

```bash
# 1) Bootstrap Node and PM2 (via nvm)
curl -fsSL https://raw.githubusercontent.com/sobhytfaily/Kidzmondo/main/deploy/scripts/bootstrap-ubuntu.sh | bash

# 2) Deploy from Git to /var/www/kidzmondo
curl -fsSL https://raw.githubusercontent.com/sobhytfaily/Kidzmondo/main/deploy/scripts/deploy-from-git.sh -o /tmp/deploy.sh
bash /tmp/deploy.sh https://github.com/sobhytfaily/Kidzmondo.git /var/www/kidzmondo
```

Set your environment variables before running the deploy script if you don't keep a `.env` file in the repo root.

## 4a) Start with systemd (recommended)

1. Copy `deploy/systemd/kidzmondo.service.example` to `/etc/systemd/system/kidzmondo.service`. Adjust paths, user, and env.
2. Reload and start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable kidzmondo --now
sudo systemctl status kidzmondo
```

## 4b) Start with PM2

```bash
npm i -g pm2
pm2 start deploy/pm2.config.cjs --env production
pm2 save
pm2 startup  # follow instructions to enable startup on reboot
```

## 5) Reverse proxy (optional)

Copy `deploy/nginx/kidzmondo.conf.example` to your Nginx sites-available, adjust `server_name`, then enable and reload Nginx.

```bash
sudo ln -s /etc/nginx/sites-available/kidzmondo /etc/nginx/sites-enabled/kidzmondo
sudo nginx -t && sudo systemctl reload nginx
```

## Database tips

Create DB and user (example):

```sql
CREATE DATABASE strapi OWNER strapi;
ALTER USER strapi WITH PASSWORD 'strongpassword';
GRANT ALL PRIVILEGES ON DATABASE strapi TO strapi;
```

If your provider requires TLS, set `DATABASE_SSL=true`. For custom CA, you may also need to provide certs via env (`DATABASE_SSL_CA`, etc.).

## File uploads

By default, files are stored on the server filesystem under `public/uploads`. Ensure this directory is backed up/persisted. For horizontally scaled setups, consider a cloud storage provider with the appropriate Strapi upload plugin.

## Health and logs

- Check app logs via your process manager (e.g., `journalctl -u kidzmondo -f` or `pm2 logs`).
- The HTTP service listens on `0.0.0.0:1337` by default; place a reverse proxy in front for TLS and nice domains.
