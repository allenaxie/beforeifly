const mongoose = require('mongoose');
// Ensure category model is before productSchema
require('./category');

const productSchema = require('./productSchema');

module.exports = mongoose.model('Product', productSchema);