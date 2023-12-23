const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`


const sequelize = new Sequelize(config.dbURl, {
  dialect: 'postgres',
  logging: console.log,
});

setupModels(sequelize);

// sequelize.sync(); // esto no es recomendable en produccion

module.exports = sequelize
