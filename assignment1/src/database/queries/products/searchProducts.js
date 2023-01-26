const connection = require('../../config/connection');

const searchProducts = (q, c) => {
  const query =
    c === 'all'
      ? `select p.* , c.name as category_name
from products p left join categories c on p.categoryId=c.id
where LOWER(p.name) like '%${q}%' limit 10; `
      : `select p.* , c.name as category_name
from products p left join categories c on p.categoryId=c.id
where LOWER(p.name) like '%${q}%' and c.id=${c} limit 10;`;
  return connection.query(query);
};
module.exports = searchProducts;
