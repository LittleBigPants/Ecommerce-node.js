const { Model, DataTypes, Sequelize  } = require('sequelize');


const CATEGORY_TABLE = 'categories';

const CategorySchema = {
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}

class Category extends Model {
  static associate(models) {
    // associate
		this.hasMany(models.Product, {
			as: 'products',
			foreignKey: 'categoryId',
		});
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
