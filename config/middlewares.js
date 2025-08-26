module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      headers: '*',
      origin: [
        'http://localhost:3000',
        'http://localhost:1337',
        process.env.CLIENT_URL,
        'https://aromascafe2.vercel.app',
        'https://aromascafe2backend.onrender.com',
        'https://aromascafe2-aj7zdrmo8-lucas-cids-projects.vercel.app', // ← Agregar esta línea
        'https://*.vercel.app',
        'https://*.onrender.com', // ← Y esta también
        /\.vercel\.app$/,
        /\.onrender\.com$/,
      ]
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];