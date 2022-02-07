require ('dotenv').config();
require('./config/database');

// Import models
const Category = require('./models/category');
const Product = require('./models/product');

(async function() {

    // Categories
    // Delete any existing data
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Luggage', sortOrder: 1},
        {name: 'Toiletries', sortOrder: 2},
        {name: 'Comfort', sortOrder: 3},
        {name: 'Pharmacy', sortOrder: 4},
        {name: 'Other', sortOrder: 5},
        {name: 'Bundles', sortOrder: 6},
    ]);


    // Products
    await Product.deleteMany({});
    const products = await Product.create([
        // Luggages
        {name: 'Samsonite Omni 2 Midnight Black Luggage', description: '28" spinner luggage - maximizes your packing power and is the ideal checked bag for longer trips', imageURL: 'images/suitcase1.jpg', price: 159.99, category:categories[0]},
        {name: 'DELSEY Paris Champagne White Luggage', description: '24" lightweight and durable 100% polycarbonate shell that is extremely resilient to cracking or breaking', imageURL: 'images/suitcase2.png', price: 350.99, category:categories[0]},
        {name: 'Travelpro Maxlite 5 Azure Blue', description: '25" durable, lightweight checked-bag with expansion option lets you pack more with a 100% polycarbonate hard shell engineered to combine impact-absorbing flexibility and extreme lightweight design', imageURL: 'images/suitcase3.png', price: 149.99, category:categories[0]},
        // Toiletries
        {name: 'Lermende Clear Toiletry Bag', description: '2 piece TSA approved black travel carry on bag', imageURL: 'images/toiletrybag1.png', price: 9.99, category:categories[1]},
        {name: "Men's Travel Bath and Body Set", description: 'The kit contains all the most-used personal hygiene items for men, including a toothbrush, a comb and a disposable twin blade razor.', imageURL: 'images/men-travel-kit.png', price: 6.99, category:categories[1]},
        {name: "Women's Travel Bath and Body Set", description: 'The kit contains 13 most-used personal hygiene items for women, including a Tresemme Shampoo 3oz., Tresemme Conditioner 3oz., Nivea Soft Creme .84oz., Twin Disposable Razor, and etc...', imageURL: 'images/womens-travel-kit.webp', price: 6.99, category:categories[1]},
    
    
    ])

    process.exit();
})();