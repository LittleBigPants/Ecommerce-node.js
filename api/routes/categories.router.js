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

router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res) =>{
  try {
    const body = req.body;
    const newCategory = await service.create(body)
    res.status(201).json(newCategory);

  } catch (error) {
    next(error);
  }


})

router.delete('/:id', async (req, res) =>{
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);

  } catch (error) {
    next(error)
  }

})

module.exports = router;
