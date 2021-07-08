"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.category = void 0;

var _products = _interopRequireDefault(require("../services/products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const category = products => ({
  categoria: products.categoria
});

exports.category = category;