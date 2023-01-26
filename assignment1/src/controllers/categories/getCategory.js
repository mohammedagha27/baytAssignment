const { getCategoriesQuery } = require('../../database/queries');

const getCategories = (req, res) => {
  getCategoriesQuery()
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      res.status(500).json('something went wrong', err);
    });
};

module.exports = getCategories;
