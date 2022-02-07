const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// POST /api/orders/cart/products/:id
router.post('/cart/products/:id', ordersCtrl.addToCart);


module.exports = router;