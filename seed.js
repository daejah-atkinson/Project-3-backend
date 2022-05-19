require('dotenv').config();
const mongoose = require('mongoose');
const Toiletries = require('./models/Toiletries');

const connectionStr = process.env.MONGODB_URI
mongoose.connect(connectionStr)


const SeedToiletries = [
    {
        item: "Toothbrush"
    },
    {
        item: "Toothpaste"
    },
    {
        item: "Deodorant"
    },
    {
        item: "Shampoo"
    },
    {
        item: "Conditioner"
    },
    {
        item: "Bodywash"
    },
    {
        item: "Lotion"
    },
    {
        item: "Sunscreen"
    },
    {
        item: "Razor"
    },
    {
        item: "Hair dryer"
    },
    {
        item: "Brush"
    },
    {
        item: "Fragrance"
    },

];
const seedDB = async()=>{
    await Toiletries.insertMany(SeedToiletries)
};

seedDB().then(()=>{
    mongoose.connection.close();
})