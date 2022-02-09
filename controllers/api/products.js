const Product = require('../../models/product');

module.exports = {
    index,
    getFeat,
}

async function index (req, res) {
    // Find and sort products based on category
    const products = await Product.find({}).populate('category').exec();
    // Sort products based on category sort order
    products.sort((a,b) => a.category.sortOrder - b.category.sortOrder);
    res.json(products);
}

async function getFeat(req, res) {
    // find products less than $200
    const products = await Product.find({price: {$lt: 200} })
    res.json(products)
}