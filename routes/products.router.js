const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const {size} = req.query;
  const limit = size || 100
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });

  }
  res.json(products);
});

router.get('/filter', (req, res) => {
    res.send("buenas soy un filtro");
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: "product 2",
    price: 200,
  });
});

router.post('/', (req, res) =>{
  const body = req.body;
  res.json({
    message: "creado",
    data: body
  });
})

module.exports = router;
