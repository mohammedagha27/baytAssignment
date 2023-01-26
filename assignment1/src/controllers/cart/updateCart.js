/* eslint-disable no-unused-vars */
const { updateCartQuery } = require('../../database/queries');

const updateCart = (req, res) => {
  const { productId, q } = req.body;
  const userId = req.user.id;
  updateCartQuery({ userId, productId, q })
    .then((data) => res.json(data))
    .catch((err) => {
      res
        .status(500)
        .json({ mag: 'couldnt add product to cart!, Please Try again' });
    });
};
module.exports = updateCart;
