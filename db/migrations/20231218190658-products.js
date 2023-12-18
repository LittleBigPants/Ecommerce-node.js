const {UserSchema, USER_TABLE} = require('./../models/user.model');
const {ProductSchema, PRODUCT_TABLE} = require('./../models/product.model');
const {CategorySchema, CATEGORY_TABLE} = require('./../models/category.model');
const {CustomerSchema, CUSTOMER_TABLE} = require('./../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  }
};
