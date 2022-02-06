const Product = require('../../models/product');

module.exports = {
    index,
    getFeat,
}

async function index (req, res) {
    const products = await Product.find({}).populate('category').exec();
    products.sort((a,b) => a.category.sortOrder - b.category.sortOrder);
    res.json(products);
}

async function getFeat(req, res) {
    const products = await Product.find({price: {$lt: 200} })
    res.json(products)
    console.log(products)
}