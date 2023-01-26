const router = require('express').Router();

const {
  getSingleProduct,
  searchProducts,
  getProductsCount,
  getCategories,
} = require('../controllers');
const getProducts = require('../controllers/products/getProducts');
const getProductsByOffset = require('../controllers/products/getProuductsByOffset');
const { cacheMiddleware } = require('../middlewares');

router.get('/products',cacheMiddleware,getProducts);
router.get('/products/page/:start',cacheMiddleware,getProductsByOffset);
router.get('/products-count',cacheMiddleware, getProductsCount);
router.get('/search/:q&:c',cacheMiddleware, searchProducts);
router.get('/products/:productId',cacheMiddleware, getSingleProduct);
router.get('/categories',cacheMiddleware, getCategories);
module.exports = router;
