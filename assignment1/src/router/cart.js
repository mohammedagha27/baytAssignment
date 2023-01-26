const router = require('express').Router();
const { getCart, addCart, deleteCart, updateCart } = require('../controllers');
const { authorization, cacheMiddleware } = require('../middlewares');

router.post('/cart', authorization, addCart);
router.get('/cart', authorization,cacheMiddleware, getCart);
router.patch('/cart', authorization, updateCart);
router.delete('/cart/:productId', authorization, deleteCart);

module.exports = router;
