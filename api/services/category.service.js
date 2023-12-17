const boom = require('@hapi/boom');

const { models } = require('./../../libs/sequelize');

class CategoryService {

  constructor(){
  }
  async create(data) {
    const newCategory = await models.Category.create(data)
    return newCategory;
  }

  async find() {
    const rta = await models.Category.findAll();
    return rta;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id);
    if(!category){
      throw boom.notFound("Category not found");
    }
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id)
    const rta = await category.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id)
    await user.destroy();
    return { id };
  }

}

module.exports = CategoryService;
