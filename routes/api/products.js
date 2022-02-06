const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/api/products');

// GET /api/products
router.get('/', productsCtrl.index);

// GET /api/products/featured
router.get('/featured', productsCtrl.getFeat);

module.exports = router;