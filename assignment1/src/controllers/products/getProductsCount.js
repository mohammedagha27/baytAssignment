const { getProductsCountQuery } = require('../../database/queries');

const getProductsCount = (req, res) => {
  getProductsCountQuery()
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      res.status(500).json('something went wrong', err);
    });
};

module.exports = getProductsCount;
