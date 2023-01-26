const NodeCache = require("node-cache");
const myCache = new NodeCache();

const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl;
  const value = myCache.get(key);
  if (value) {
    res.json(value);
  } else {
    next();
  }
};

module.exports=cacheMiddleware;