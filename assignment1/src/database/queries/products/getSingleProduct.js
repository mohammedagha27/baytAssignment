const connection = require('../../config/connection');

const getSingleProduct = (id) =>
  connection.query(
    'select p.* , c.name as category_name from products p left join categories c on p.categoryId=c.id where p.id=$1',
    [id]
  );

module.exports = getSingleProduct;
