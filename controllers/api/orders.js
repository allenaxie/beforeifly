const Order = require('../../models/order');

module.exports = {
    cart,
}

async function cart(req, res) {
    // a cart is the unpaid order for a user
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
}