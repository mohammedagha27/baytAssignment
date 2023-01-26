const router = require('express').Router();
const AuthRoutes = require('./auth');
const CartRoutes = require('./cart');
const productRouter = require('./products');

router.use(AuthRoutes);
router.use(CartRoutes);
router.use(productRouter);

module.exports = router;
