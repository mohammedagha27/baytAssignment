const { getProductsByOffsetQuery } = require('../../database/queries');

const getProductsByOffset = (req, res) => {
  const start = req.params.start || 0;
  getProductsByOffsetQuery(start)
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      res.status(500).json('something went wrong', err);
    });
};

module.exports = getProductsByOffset;
