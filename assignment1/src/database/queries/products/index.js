const getProductsQuery = require('./getProducts');
const getSingleProductQuery = require('./getSingleProduct');
const searchProductsQuery = require('./searchProducts');
const getProductsByOffsetQuery = require('./getProductsByOffset');
const getProductsCountQuery = require('./getProductsCount');

module.exports = {
  getProductsQuery,
  getSingleProductQuery,
  searchProductsQuery,
  getProductsByOffsetQuery,
  getProductsCountQuery,
};
