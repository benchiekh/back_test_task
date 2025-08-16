export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
  name: 'strapi::cors',
  config: {
    enabled: true,
    origin: [
      'https://front-test-task-6uwp-birteea6u-ihebs-projects-3647af1a.vercel.app',  
      'http://localhost:3000',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    headers: '*',
  },
}
,
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
