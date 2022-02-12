const Order = require('../../models/order');

module.exports = {
    cart,
    addToCart,
    setProductQtyInCart,
    checkout,
    getAll,
}

async function cart(req, res) {
    // a cart is the unpaid order for a user
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
}

async function addToCart(req, res) {
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
    cart.isPaid = true;
    await cart.save();
    res.json(cart);
}

async function getAll(req, res) {
    // Find orders that belong to user and are already paid
    const orders = await Order.find({ user: req.user._id, isPaid: true })
    res.json(orders);
}
