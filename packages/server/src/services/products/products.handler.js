export default ({ productsService }) => {
  const products = {};

  products.getAll = ctx => productsService.getAll(ctx);
  products.getCategories = ctx => productsService.getCategories(ctx);
  products.getByFilter = ctx => productsService.getByFilter(ctx);

  return products;
};