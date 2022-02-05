const mongoose = require('mongoose');
// Ensure category model is before itemSchema
require('./category');
const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);