const connection = require('../../config/connection');

// eslint-disable-next-line arrow-body-style
const checkExistance = (key, value) => {
  return connection.query(`select * from users where ${key} =$1`, [value]);
};
module.exports = checkExistance;
