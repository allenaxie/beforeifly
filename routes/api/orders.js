const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const paymentsCtrl = require('../../controllers/api/payments');

// BASE_URL = /api/orders

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// POST /api/orders/cart/products/:id
router.post('/cart/products/:id', ordersCtrl.addToCart);
// PUT /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setProductQtyInCart);
// POST /checkout
router.post('/cart/checkout', ordersCtrl.checkout);
// GET /api/orders
router.get('/', ordersCtrl.getAll);
// GET /api/orders/session
router.get('/session', ordersCtrl.checkout);

module.exports = router;