/* eslint-disable arrow-body-style */
const connection = require('../../config/connection');

const deleteCart = ({ userId, productId }) => {
  return connection.query(
    'delete from cart c where c.userid=$1 and c.productid=$2  ',
    [userId, productId]
  );
};

module.exports = deleteCart;
