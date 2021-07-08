"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = ({
  productsService
}) => {
  const products = {};

  products.getAll = ctx => productsService.getAll(ctx);

  products.getCategories = ctx => productsService.getCategories(ctx);

  products.getByFilter = ctx => productsService.getByFilter(ctx);

  return products;
};

exports.default = _default;