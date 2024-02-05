// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // You can change this path to anything you want
    createProxyMiddleware({
      target: 'https://www.omdbapi.com',
      changeOrigin: true,
    })
  );
};
