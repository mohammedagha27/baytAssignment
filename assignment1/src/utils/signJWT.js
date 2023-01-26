require('dotenv').config();
const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;
const signJWT = (tokenDataObj) =>
  new Promise((resolve, reject) => {
    jwt.sign(tokenDataObj, SECRET_KEY, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
module.exports = signJWT;
