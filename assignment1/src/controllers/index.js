const { signup, login } = require('./auth');
const { getCart, addCart, deleteCart, updateCart } = require('./cart');
const {
  getProducts,
  getSingleProduct,
  searchProducts,
  getProductsCount,
} = require('./products');
const getCategories = require('./categories/getCategory');

module.exports = {
  getCart,
  addCart,
  deleteCart,
  updateCart,
  signup,
  login,
  getProducts,
  getSingleProduct,
  searchProducts,
  getProductsCount,
  getCategories,
};
