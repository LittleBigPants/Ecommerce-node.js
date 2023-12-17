const express = require('express');
const { createCategorySchema, updateCategorySchema, getCategorySchema } = require('./../schemas/category.schema');
const CategoryService = require('./../services/category.service');
const validatorHandler = require('./../middlewares/validator.handler');


const router = express.Router();
const service = new CategoryService();


router.get('/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
  });



});

router.get('/', async (req, res) => {
  const categories = await service.find();
  res.json(categories);
});

module.exports = router;
