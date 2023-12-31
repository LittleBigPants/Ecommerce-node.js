const productsRouter = require('./products.router.js');
const usersRouter = require('./users.router.js');
const categoriesRouter = require('./categories.router.js');
const customerRouter = require('./customer.router.js');
const orderRouter = require('./order.router.js');
const express = require('express');

function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/customers', customerRouter);
  router.use('/orders', orderRouter);
}

module.exports = routerApi;
