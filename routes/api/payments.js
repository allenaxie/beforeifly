const express = require('express');
const router = express.Router();
const paymentsCtrl = require('../../controllers/api/payments');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


// /create-checkout-session

// POST
router.post('/',paymentsCtrl.handlePayment);

module.exports = router;