/* eslint-disable no-unused-vars */
const { getCartQuery } = require('../../database/queries');

const getCart = (req, res) => {
  const userId = req.user.id;
  getCartQuery(userId)
    .then((data) => res.send(data.rows))
    .catch((err) => {
      res.status(500).json({ mag: 'couldnt get your cart,Please Try again' });
    });
};
module.exports = getCart;
