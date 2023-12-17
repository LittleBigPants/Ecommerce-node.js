const { Model, DataTypes } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  price: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER
  }
}

class Product extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}



module.exports = { PRODUCT_TABLE, ProductSchema, Product }
