const connection = require('../../config/connection');

const getProductsByOffset = (start = 0) =>
  connection.query(
    'select p.* , c.name as category_name from products p left join categories c on p.categoryId=c.id offset $1 limit 10',
    [start]
  );

module.exports = getProductsByOffset;
