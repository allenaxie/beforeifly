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
        {name: 'All', sortOrder: 0},
        {name: 'Luggage', sortOrder: 1},
        {name: 'Toiletries', sortOrder: 2},
        {name: 'Comfort', sortOrder: 3},
        {name: 'Pharmacy', sortOrder: 4},
        {name: 'Other', sortOrder: 5},
    ]);


    // Products
    await Product.deleteMany({});
    const products = await Product.create([
        // Luggages
        {name: 'Samsonite Omni 2 Midnight Black Luggage', description: '28" spinner luggage - maximizes your packing power and is the ideal checked bag for longer trips', imageURL: 'https://i.imgur.com/ZRQKSHb.jpg', price: 159.99, category:categories[1]},
        {name: 'DELSEY Paris Champagne White Luggage', description: '24" lightweight and durable 100% polycarbonate shell that is extremely resilient to cracking or breaking', imageURL: 'https://i.imgur.com/TdcrNOd.jpg', price: 350.99, category:categories[1]},
        {name: 'Travelpro Maxlite 5 Azure Blue', description: '25" durable, lightweight checked-bag with expansion option. 100% polycarbonate hard shell engineered to combine impact-absorbing flexibility and extreme lightweight design', imageURL: 'https://i.imgur.com/aRVVMtC.jpg', price: 149.99, category:categories[1]},
        {name: 'Large Travel bag', description: 'Cool, new, large multi-functional travel bag', imageURL: 'https://i.imgur.com/9AzbJug.jpg', price: 59.99, category:categories[1]},
        {name: 'Nick Cage Bag', description: "If Nicholas Cage measured stuff, he'd be Nicholas Gauge.", imageURL: 'https://i.imgur.com/gfCfZ0N.jpg', price: 19.99, category:categories[1]},
        // Toiletries
        {name: 'Lermende Clear Toiletry Bag', description: '2 piece TSA approved black travel carry on bag', imageURL: 'https://i.imgur.com/KNIC2dI.jpg', price: 9.99, category:categories[2]},
        {name: "Men's Travel Bath and Body Set", description: 'The kit contains all the most-used personal hygiene items for men, including a toothbrush, a comb and a disposable twin blade razor.', imageURL: 'https://i.imgur.com/IrSNEFf.jpg', price: 6.99, category:categories[2]},
        {name: "Women's Travel Bath and Body Set", description: 'The kit contains 13 most-used personal hygiene items for women, including a Tresemme Shampoo 3oz., Tresemme Conditioner 3oz., Nivea Soft Creme .84oz., Twin Disposable Razor, and etc...', imageURL: 'https://i.imgur.com/vRErxZz.jpg', price: 6.99, category:categories[2]},
        {name: "Colorful Toiletry Bag", description: 'Always have someone watching over your belongings', imageURL: 'https://i.imgur.com/lILlWuR.jpg', price: 19.99, category:categories[2]},
        //  Comfort
        {name: "Travelrest Ultimate Travel Pillow", description: 'Velour and memory foam materials help make this pillow soft and comfortable to sleep on', imageURL: 'https://i.imgur.com/tJDcqat.jpg', price: 32.99, category:categories[3]},
        {name: "Ultimate Vader Pillow", description: 'Join the dark side and possess the ultimate pillow for your neck', imageURL: 'https://i.imgur.com/aBQnCNg.jpg', price: 36.99, category:categories[3]},
        {name: "Dragonite Travel Pillow", description: "Now you can walk and watch Netflix on the back of a dragon's head at the same time", imageURL: 'https://i.imgur.com/u5hKAj7.jpg', price: 20.99, category:categories[3]},
        {name: "Single eye-mask cover", description: "Why use both eyes when you can use one?", imageURL: 'https://i.imgur.com/30aDcOU.jpg', price: 9.99, category:categories[3]},
        // Pharmacy
        {name: "Tums Extra Strength", description: "Chewable Antacid Tablets - 60 ct. - MULTI-SYMPTOM RELIEF: Heartburn medicine for burning in the chest, acid indigestion, sour stomach, and upset stomach associated with these symptoms ", imageURL: 'https://i.imgur.com/xkv2WR8.jpg', price: 4.99, category:categories[4]},
        {name: "Dramamine Motion Sickness Tablets", description: "Chewable orange flavored tablets. Prevents and relieves nausea, dizziness and vomiting ", imageURL: 'https://i.imgur.com/eid2Aby.jpg', price: 7.99, category:categories[4]},
        {name: "Motion Sickness Wristbands", description: "Wear it on the part that is three finger width at the inner side of the wrist (Neiguan Acupoint); the round button faces down, press the round button for 1-2 minutes ", imageURL: 'https://i.imgur.com/KKAQHjx.jpg', price: 10.99, category:categories[4]},
        // Other
        {name: "Cute Powerbank", description: "Cute power bank/ external battery to charge all types of phones ", imageURL: 'https://i.imgur.com/BYtXjTr.jpg', price: 9.99, category:categories[5]},
        {name: "Black Portable Charger", description: "10,000 mAh ultra-slim and powerful portable charger", imageURL: 'https://i.imgur.com/bab8yxp.jpg', price: 9.99, category:categories[5]},
        {name: "Flight Feet Rest", description: "It's a hammock, for your feet!", imageURL: 'https://i.imgur.com/q8ekX9e.jpg', price: 9.99, category:categories[5]},
        {name: "Tweezers Contact Lens Remover", description: "You should try it", imageURL: 'https://i.imgur.com/efPXkaZ.jpg', price: 3.99, category:categories[5]},

    
    ])

    process.exit();
})();