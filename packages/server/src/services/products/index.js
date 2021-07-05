import ProducstService from './products.service';
import ProductsHandler from './products.handler';

export default () => {
  const productsService = ProducstService();
  const productsHandler = ProductsHandler({ productsService });

  return {
    getAll: productsHandler.getAll,
    getCategories: productsHandler.getCategories,
    getByFilter: productsHandler.getByFilter,
  };
};
