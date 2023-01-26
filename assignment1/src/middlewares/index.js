const authorization = require('./authorization');
const getLoggedData = require('./getLoggedData');
const cacheMiddleware = require('./cacheMiddleware');

module.exports = { authorization, getLoggedData,cacheMiddleware };
