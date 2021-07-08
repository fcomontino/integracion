"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

require('dotenv').config();

const config = {
  db: {
    client: process.env.DB_CLIENT.toString(),
    connection: {
      port: process.env.DB_PORT.toString(),
      host: process.env.DB_HOST.toString(),
      user: process.env.DB_USER.toString(),
      password: process.env.DB_PASS.toString(),
      database: process.env.DB_DATABASE.toString(),
      tableName: 'products'
    },
    pool: {
      min: 0,
      max: 7
    }
  }
};
exports.config = config;