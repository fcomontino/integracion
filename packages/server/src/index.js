import Koa from 'koa';
import KoaRouter from 'koa-router';
import bodyParser from 'koa-body';
import Products from './services/products';

require('dotenv').config();

const app = new Koa();

const products = Products();

const router = new KoaRouter();

app.context.auth_id = 'products';

router.get('/products/categories', async (ctx) => {
    await products.getCategories(ctx);
});

router.get('/products/all', async (ctx) => {
    await products.getAll(ctx);
});

router.get('/products', async (ctx) => {
    await products.getByFilter(ctx);
});

app
    .use(bodyParser({ jsonLimit: process.env.JSONLIMIT }))
    .use(router.routes()).use(router.allowedMethods())

app.listen(process.env.SERVER_PORT, () => console.log(`server running in port ${process.env.SERVER_PORT}`));