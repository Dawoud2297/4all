const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
    target : 'https://4all.ltd',
      changeOrigin: true,
    })
  );
};
