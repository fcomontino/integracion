"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _knex = _interopRequireDefault(require("knex"));

var _auth = require("../../config/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  const products = {};

  products.getAll = async ctx => {
    const {
      db: db_credentials
    } = _auth.config;
    const db = (0, _knex.default)(db_credentials);
    const data = await db('products');
    ctx.body = {
      status: 200,
      response: data
    };
  };

  products.getCategories = async ctx => {
    const {
      db: db_credentials
    } = _auth.config;
    const db = (0, _knex.default)(db_credentials);
    const data = await db('products');
    const categories = [...new Set(data.map(product => product.categoria))];
    const response = categories.map(category => ({
      categoria: category,
      result: [...new Set(data.filter(product => product.categoria === category).map(product => product.sub_categoria))].map(subCategoy => {
        const productos = data.filter(product => product.sub_categoria === subCategoy);
        return {
          subCategoria: subCategoy,
          productos: productos.map(product => ({
            tipo: product.tipo,
            marca: product.marca,
            precio: product.precio
          }))
        };
      })
    }));
    ctx.body = {
      status: 200,
      response: response
    };
  };

  products.getByFilter = async ctx => {
    const {
      db: db_credentials
    } = _auth.config;
    const db = (0, _knex.default)(db_credentials);
    const {
      categoria,
      subCategoria,
      marca
    } = ctx.query;
    let data = [];

    if (categoria) {
      data = await db('products').where({
        categoria: categoria
      });
    } else if (subCategoria) {
      data = await db('products').where({
        sub_categoria: subCategoria
      });
    } else if (marca) {
      data = await db('products').where({
        marca: marca
      });
    } else {
      data = await db('products');
    }

    const response = data.map(product => ({
      categoria: product.categoria,
      sub_categoria: product.sub_categoria,
      tipo: product.tipo,
      mcarca: product.marca,
      precio: product.precio
    }));
    ctx.body = {
      status: 200,
      response
    };
  };

  return products;
};

exports.default = _default;