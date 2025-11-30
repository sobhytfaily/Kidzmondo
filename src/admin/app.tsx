import type { StrapiApp } from '@strapi/strapi/admin';

// Customize the admin panel here. This file was generated from app.example.tsx.
// You can add translations, extend the menu, register custom fields, etc.

export default {
  config: {
    locales: [
      // enable locales as needed, e.g. 'en', 'fr'
    ],
  },
  bootstrap(app: StrapiApp) {
    // Example: app.getStore().addNotification({ type: 'info', message: 'Admin loaded' });
    console.log('Strapi admin bootstrap', app);
  },
};
