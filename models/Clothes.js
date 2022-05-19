const mongoose = require("mongoose");


ClothesSchema = new mongoose.Schema({
    weather: String,
    clothing: String,
  });
  
const Clothes = mongoose.model("Clothes", ClothesSchema);

module.exports = Clothes;