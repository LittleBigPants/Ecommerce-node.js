const faker = require('faker');
// boom libreria para code status
const boom = require('@hapi/boom');
// const sequelize = require('../../libs/sequelize');
const { models } = require('./../../libs/sequelize');

class ProductsService {

  constructor() {
    // this.products = [];
    // this.generate();
  }

  // generate () {
  //   const limit = 100
  //   for (let i = 0; i < limit; i++) {
  //     this.products.push({
  //       id : faker.datatype.uuid(),
  //       name: faker.commerce.productName(),
  //       price: parseInt(faker.commerce.price(), 10),
  //       image: faker.image.imageUrl(),
  //       description: faker.commerce.productDescription(),
  //       isBlock: faker.datatype.boolean()
  //     });

  //   }
  // }

  async create (data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }
  async find () {

      const products = await models.Product.findAll({
        include: ['category']
      });
      return products;


    // const query = "SELECT * FROM tasks";
    // const [data] = await sequelize.query(query);
    // return data;
    //metadata me da mas contexto


    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve (this.products);
    //   }, 1000);
    // })

  }
  async findOne (id) {

    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('product not found');
    } if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
  }
  async update (id, changes) {
    const user = await this.findOne(id)
    const rta = await user.update(changes);
    return rta;

  }
  async delete (id) {
    const user = await this.findOne(id)
    await user.destroy();
    return { id };
  }
}

module.exports = ProductsService;
