require('dotenv').config();
const env = process.env.NODE_ENV || 'development';

module.exports = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE || 'tokens-db',
    port: process.env.DB_PORT || '2345',
  },
  migrations: {
    directory: './db/migrations',
  },
  seeds: {
    directory: './db/seeds'
  }
};
