/* eslint-disable arrow-body-style */
const connection = require('../../config/connection');

const updateCart = ({ userId, productId, q }) => {
  return connection.query(
    `UPDATE cart SET quantity = $1
    WHERE userId = $2 AND productId = $3`,
    [q, userId, productId]
  );
};

module.exports = updateCart;
