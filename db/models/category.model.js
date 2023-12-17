const { Model, DataTypes } = require('sequelize');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
  category: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
  },
}

class Category extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false
    }
  }
}



module.exports = { CATEGORY_TABLE, CategorySchema, Category }
