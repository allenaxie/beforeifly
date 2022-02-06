const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const lineProductSchema = new Schema ({
    qty: {type: Number, default: 1},
    product: productSchema
}, {
    timestamps: true,
})

const orderSchema = new Schema({
    // An order belongs to a user
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    // Embed an order's line products
    lineProducts: [lineProductSchema],
    isPaid: {type: Boolean, default: false},
}, {
    timestamps: true,
    // Enable virtuals
    toJSON: {virtuals:true}
});

module.exports = mongoose.model('Order', orderSchema);