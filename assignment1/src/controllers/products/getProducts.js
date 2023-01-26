const { getProductsQuery } = require('../../database/queries');

const getProducts = (req, res) => {
  getProductsQuery()
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      res.status(500).json('something went wrong', err);
    });
};

module.exports = getProducts;
