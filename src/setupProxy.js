const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
    //   target: 'http://localhost:3000',
    // target : 'http://localhost:5500',
    // target : 'https://4all.ltd/services/api/ads/companies?page_count=5',
    target : 'https://4all.ltd',
      changeOrigin: true,
    })
  );
};