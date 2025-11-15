module.exports = {
  apps: [
    {
      name: 'kidzmondo',
      script: 'npm',
      args: 'run start',
      cwd: process.env.PWD || __dirname + '/..',
      env: {
        NODE_ENV: 'production',
        // Prefer setting real secrets in your environment and not here.
        // APP_KEYS: '',
        // DATABASE_CLIENT: 'postgres',
        // DATABASE_URL: '',
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
