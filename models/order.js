const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = require('./productSchema');

const lineProductSchema = new Schema ({
    qty: {type: Number, default: 1},
    product: productSchema
}, {
    timestamps: true,
    toJSON: {virtuals:true}
})

lineProductSchema.virtual('extPrice').get(function () {
    // 'this' is bound to the lineProduct subdocument
    return this.qty * this.product.price;
})

const orderSchema = new Schema({
    // A order belongs to a user
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    // Embed a order's line products
    lineProducts: [lineProductSchema],
    isPaid: {type: Boolean, default: false},
}, {
    timestamps: true,
    // Enable virtuals
    toJSON: {virtuals:true}
});

orderSchema.virtual('orderTotal').get(function () {
    // 'this' is bound to order doc
    // For each lineProduct in order, add its extPrice to total (initialized at 0)
    return this.lineProducts.reduce((total, product) => total + product.extPrice, 0)
});

orderSchema.virtual('totalQty').get(function () {
    // 'this' is bound to order doc
    return this.lineProducts.reduce((totalQty, product) => totalQty + product.qty, 0)
});

orderSchema.virtual('orderId').get(function () {
    // Use last 6 characters of MongoDB's id for each doc as order id
    return this.id.slice(-6).toUpperCase();
});

// getCart Static
orderSchema.statics.getCart = function (userId) {
    // 'this' is bound to the model (don't use an arrow function)
    // return the promise that resolves to a cart (the user's unpaid order)
    return this.findOneAndUpdate (
        // query 
        { user: userId, isPaid: false},
        // update - in case the order (cart) is upserted
        { user: userId },
        // upsert option creates the doc if it doesn't already exist
        { upsert: true, new: true}
    );
};

orderSchema.methods.addProductToCart = async function(productId) {
    // 'this' refers to the 'cart' (unpaid order)
    const cart = this;
    const lineProduct = cart.lineProducts.find(lineProduct => lineProduct.product._id.equals(productId));
    if (lineProduct) {
        // if the item is already in the cart, increase the qty
        lineProduct.qty +=1;
    } else {
        // Not in cart, add the item!
        const product = await mongoose.model('Product').findById(productId);
        cart.lineProducts.push({ product });
    }
    return cart.save();
}

orderSchema.methods.setProductQty = async function (productId, newQty) {
    // 'this' refers to the 'cart' (unpaid order)
    const cart = this;
    // Find the line product based on its product id
    const lineProduct = cart.lineProducts.find(lineProduct => lineProduct.product._id.equals(productId));
    // Remove item from cart if newQty is less than or equals 0
    if (lineProduct && newQty <= 0) {
        lineProduct.remove();
    } 
    // if product qty is true(greater than 0)
    else if (lineProduct) {
        // update quantity
        lineProduct.qty = newQty;
    }
    // Save the cart
    return cart.save();
}

module.exports = mongoose.model('Order', orderSchema);