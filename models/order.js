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

module.exports = mongoose.model('Order', orderSchema);