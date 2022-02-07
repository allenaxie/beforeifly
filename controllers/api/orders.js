const Order = require('../../models/order');

module.exports = {
    cart,
    addToCart,
}

async function cart(req, res) {
    // a cart is the unpaid order for a user
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
}

async function addToCart (req, res) {
    // Find user's cart
    const cart = Order.getCart(req.user._id);
    // The promise resolves to the document, which we already have
    // in the cart variable, so no need to create another variable...
    await cart.addProductToCart(req.params.id);
    res.json(cart);
}