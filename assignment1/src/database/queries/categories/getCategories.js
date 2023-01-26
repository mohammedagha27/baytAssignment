const connection = require('../../config/connection');

const getCategories = () =>
  connection.query(' select id, name from categories  ');

module.exports = getCategories;
