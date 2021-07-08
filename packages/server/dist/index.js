"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _koaBody = _interopRequireDefault(require("koa-body"));

var _products = _interopRequireDefault(require("./services/products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

const app = new _koa.default();
const products = (0, _products.default)();
const router = new _koaRouter.default();
app.context.auth_id = 'products';
router.get('/products/categories', async ctx => {
  await products.getCategories(ctx);
});
router.get('/products/all', async ctx => {
  await products.getAll(ctx);
});
router.get('/products', async ctx => {
  await products.getByFilter(ctx);
});
app.use((0, _koaBody.default)({
  jsonLimit: process.env.JSONLIMIT
})).use(router.routes()).use(router.allowedMethods());
app.listen(process.env.SERVER_PORT, () => console.log(`server running in port ${process.env.SERVER_PORT}`));