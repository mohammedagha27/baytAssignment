const Jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;
const verifyJWT = (token) =>
  new Promise((resolve, reject) => {
    Jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });

module.exports = verifyJWT;
