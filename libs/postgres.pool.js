// esto para no tener datos importantes en el codigo
const { Pool } = require('pg');

const { config } = require('./../config/config');

let URI = '';

if(config.isProd){
  URI = config.dbURl;
} else {

  const USER = encodeURIComponent(config.dbUser);
  const PASSWORD = encodeURIComponent(config.dbPassword);
   URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
}



  const pool = new Pool({ connectionString: URI});


module.exports = pool;

//codigo anterior
// const { Pool } = require('pg');

// const pool = new Pool({
//   host: 'localhost',
//   port: 5432,
//   user: 'kevin',
//   password: 'admin123',
//   database: 'my_store',
// });

// module.exports = pool;



