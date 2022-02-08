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
    ]);


    // Products
    await Product.deleteMany({});
    const products = await Product.create([
        // Luggages
        {name: 'Samsonite Omni 2 Midnight Black Luggage', description: '28" spinner luggage - maximizes your packing power and is the ideal checked bag for longer trips', imageURL: 'images/suitcase1.jpg', price: 159.99, category:categories[0]},
        {name: 'DELSEY Paris Champagne White Luggage', description: '24" lightweight and durable 100% polycarbonate shell that is extremely resilient to cracking or breaking', imageURL: 'images/suitcase2.png', price: 350.99, category:categories[0]},
        {name: 'Travelpro Maxlite 5 Azure Blue', description: '25" durable, lightweight checked-bag with expansion option lets you pack more with a 100% polycarbonate hard shell engineered to combine impact-absorbing flexibility and extreme lightweight design', imageURL: 'images/suitcase3.png', price: 149.99, category:categories[0]},
        {name: 'Large Travel bag', description: 'Cool, new, large multi-functional travel bag', imageURL: 'images/Large-travel-bags.jpeg', price: 59.99, category:categories[0]},
        {name: 'Nick Cage Bag', description: "If Nicholas Cage measured stuff, he'd be Nicholas Gauge.", imageURL: 'images/Nic-cage-backpack.jpeg', price: 19.99, category:categories[0]},
        // Toiletries
        {name: 'Lermende Clear Toiletry Bag', description: '2 piece TSA approved black travel carry on bag', imageURL: 'images/toiletrybag1.png', price: 9.99, category:categories[1]},
        {name: "Men's Travel Bath and Body Set", description: 'The kit contains all the most-used personal hygiene items for men, including a toothbrush, a comb and a disposable twin blade razor.', imageURL: 'images/men-travel-kit.png', price: 6.99, category:categories[1]},
        {name: "Women's Travel Bath and Body Set", description: 'The kit contains 13 most-used personal hygiene items for women, including a Tresemme Shampoo 3oz., Tresemme Conditioner 3oz., Nivea Soft Creme .84oz., Twin Disposable Razor, and etc...', imageURL: 'images/womens-travel-kit.webp', price: 6.99, category:categories[1]},
        {name: "Colorful Toiletry Bag", description: 'Always have someone watching over your belongings', imageURL: 'images/Colorful-travel-bag.jpeg', price: 19.99, category:categories[1]},
        //  Comfort
        {name: "Travelrest Ultimate Travel Pillow", description: 'Velour and memory foam materials help make this pillow soft and comfortable to sleep on', imageURL: 'images/rest-pillow.webp', price: 32.99, category:categories[2]},
        {name: "Ultimate Vader Pillow", description: 'Join the dark side and possess the ultimate pillow for your neck', imageURL: 'images/Darth-Vader.webp', price: 36.99, category:categories[2]},
        {name: "Dragonite Travel Pillow", description: "Now you can walk and watch Netflix on the back of a dragon's head at the same time", imageURL: 'images/Dragonite travel pillow.jpeg', price: 20.99, category:categories[2]},
        {name: "Single eye-mask cover", description: "Why use both eyes when you can use one?", imageURL: 'images/single-eye-mask-cover.jpeg', price: 9.99, category:categories[2]},
        // Pharmacy
        {name: "Tums Extra Strength", description: "Chewable Antacid Tablets - 60 ct. - MULTI-SYMPTOM RELIEF: Heartburn medicine for burning in the chest, acid indigestion, sour stomach, and upset stomach associated with these symptoms ", imageURL: 'images/Tums.jpeg', price: 4.99, category:categories[3]},
        {name: "Dramamine Motion Sickness Tablets", description: "Chewable orange flavored tablets. Prevents and relieves nausea, dizziness and vomiting ", imageURL: 'images/Dramamine-motion-sickness.jpg', price: 7.99, category:categories[3]},
        {name: "Motion Sickness Wristbands", description: "Wear it on the part that is three finger width at the inner side of the wrist (Neiguan Acupoint); the round button faces down, press the round button for 1-2 minutes ", imageURL: 'images/Motion-sickness-wristbands.jpeg', price: 10.99, category:categories[3]},
        // Other
        {name: "Cute Powerbank", description: "Cute power bank/ external battery to charge all types of phones ", imageURL: 'images/Cute-powerbank.jpeg', price: 9.99, category:categories[4]},
        {name: "Black Portable Charger", description: "10,000 mAh ultra-slim and powerful portable charger", imageURL: 'images/black-power-bank.jpg', price: 9.99, category:categories[4]},
        {name: "Flight Feet Rest", description: "It's a hammock, for your feet!", imageURL: 'images/Flight-feet-rest.jpeg', price: 9.99, category:categories[4]},
        {name: "Tweezers Contact Lens Remover", description: "You should try it", imageURL: 'images/Tweezers-contact-lens-remover.jpeg', price: 3.99, category:categories[4]},

    
    ])

    process.exit();
})();