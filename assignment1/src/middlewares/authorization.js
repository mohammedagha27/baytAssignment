const { verifyJWT } = require('../utils');

const authorization = (req, res, next) => {
  if (!req.cookies.token) {
    res.status(401).json({ istoken: false });
  } else {
    const { token } = req.cookies;
    verifyJWT(token)
      .then((decoded) => {
        req.user = decoded;
        next();
      })
      .catch((err) => next(err));
  }
};
module.exports = authorization;
