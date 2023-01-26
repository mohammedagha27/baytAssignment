const connection = require('../../config/connection');

const getProductsCount = () =>
  connection.query('SELECT COUNT(id) as product_count FROM products;');

module.exports = getProductsCount;
