const { searchProductsQuery } = require('../../database/queries');

const searchProducts = (req, res) => {
  const { q, c } = req.params;
  searchProductsQuery(q, c)
    .then((data) => {
      res.status(200).json(data.rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'something went wrong' });
    });
};

module.exports = searchProducts;
