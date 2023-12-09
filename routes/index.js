const productsRouter = require('./products.router.js');
const usersRouter = require('./users.router.js');
const categoriesRouter = require('./categories.router.js');
const express = require('express');

function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
