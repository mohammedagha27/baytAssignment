const connection = require('../../config/connection');

const getProducts = () =>
  connection.query(
    'select p.* , c.name as category_name from products p left join categories c on p.categoryId=c.id limit 10'
  );

module.exports = getProducts;
