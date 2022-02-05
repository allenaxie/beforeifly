const Schema = require('mongoose').Schema;

const productSchema = new Schema ({
    name: {type: String, required: true},
    description: {type: String, required: true},
    imageURL: {type: String, required: true},
    price: {type: Number, required: true, default: 0},
    category: {type: Schema.Types.ObjectId, ref: 'Category'}, 
}, {
    timestamps: true
})

module.exports = productSchema