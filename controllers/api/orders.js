const Order = require('../../models/order');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);



module.exports = {
    cart,
    addToCart,
    setProductQtyInCart,
    checkout,
}

async function cart(req, res) {
    // a cart is the unpaid order for a user
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
}

async function addToCart (req, res) {
    // Find user's cart
    const cart = await Order.getCart(req.user._id);
    // The promise resolves to the document, which we already have
    // in the cart variable, so no need to create another variable...
    await cart.addProductToCart(req.params.id);
    res.json(cart);
}

async function setProductQtyInCart(req, res) {
    // Find user's cart
    const cart = await Order.getCart(req.user._id)
    // Set product quantity
    await cart.setProductQty(req.body.productId, req.body.newQty);
    res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
    // Find cart
    const cart = await Order.getCart(req.user._id);
    // cart.isPaid = true;
    // await cart.save();
    // res.json(cart);
}