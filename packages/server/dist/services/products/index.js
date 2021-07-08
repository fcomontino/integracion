"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _products = _interopRequireDefault(require("./products.service"));

var _products2 = _interopRequireDefault(require("./products.handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  const productsService = (0, _products.default)();
  const productsHandler = (0, _products2.default)({
    productsService
  });
  return {
    getAll: productsHandler.getAll,
    getCategories: productsHandler.getCategories,
    getByFilter: productsHandler.getByFilter
  };
};

exports.default = _default;