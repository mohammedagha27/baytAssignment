/* eslint-disable arrow-body-style */
const connection = require('../../config/connection');

const addCart = ({ userId, productId, q }) => {
  return connection.query(
    `INSERT INTO cart (userid, productid, quantity) 
    VALUES ($1, $2, $3)
    ON CONFLICT (userid,productid) DO UPDATE SET quantity = $3`,
    [userId, productId, q]
  );
};

module.exports = addCart;
