const {
  getCartQuery,
  addCartQuery,
  deleteCartQuery,
  updateCartQuery,
} = require('./cart');
const { addUserQuery, checkExistanceQuery } = require('./users');
const {
  getProductsQuery,
  getSingleProductQuery,
  searchProductsQuery,
  getProductsByOffsetQuery,
  getProductsCountQuery,
} = require('./products');
const getCategoriesQuery = require('./categories/getCategories');

module.exports = {
  addUserQuery,
  checkExistanceQuery,
  getCartQuery,
  addCartQuery,
  deleteCartQuery,
  getSingleProductQuery,
  getProductsQuery,
  updateCartQuery,
  searchProductsQuery,
  getProductsByOffsetQuery,
  getProductsCountQuery,
  getCategoriesQuery,
};
