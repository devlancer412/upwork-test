const { createProxyMiddleware } = require('http-proxy-middleware');

console.log("setup")

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://44.211.121.104:3000/api',
      changeOrigin: true,
      secure: false
    })
  );
};