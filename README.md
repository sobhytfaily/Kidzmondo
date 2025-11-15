# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## �️ Database configuration

This project is set up to use SQLite in development and PostgreSQL in production.

### Development (SQLite)

1. Copy `.env.example` to `.env` and keep `DATABASE_CLIENT=sqlite`.
2. Optionally change the DB file path via `DATABASE_FILENAME` (defaults to `.tmp/data.db`).
3. Start the app:

```
npm run develop
```

SQLite driver used: `better-sqlite3` (already installed).

### Production (PostgreSQL)

1. Ensure the `pg` driver is installed (already listed in dependencies for deployment). If missing, install it:

```
npm install pg
```

2. Provide environment variables to your runtime (container, PaaS, VM): set `DATABASE_CLIENT=postgres` and either a `DATABASE_URL` or discrete connection vars (`DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_NAME`, `DATABASE_USERNAME`, `DATABASE_PASSWORD`).

3. If your provider requires TLS, set `DATABASE_SSL=true` (and optional cert variables if using a custom CA).

You can use `.env.production.example` as a template for your production secrets (don’t commit the real file).

Strapi will read these via `config/database.ts` and select the correct client based on `DATABASE_CLIENT`.

## �📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
