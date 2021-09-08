const Router = require('koa-router');
const Product = require('../controller/productController');
const Order = require('../controller/orderController');

const router = new Router();
const product = new Product();
const order = new Order();

router.get('/product', product.list);
router.get('/product/:id', product.get);
router.post('/order', order.create);

module.exports = router;