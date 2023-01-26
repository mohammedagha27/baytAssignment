/* eslint-disable no-unused-vars */
const { addCartQuery } = require('../../database/queries');

const addCart = (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user.id;
  const q = quantity || 1;
  addCartQuery({ userId, productId, q })
    .then((data) => res.json(data))
    .catch((err) => {
      res
        .status(500)
        .json({ mag: 'couldnt add product to cart!, Please Try again' });
    });
};
module.exports = addCart;
