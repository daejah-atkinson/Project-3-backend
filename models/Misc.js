const mongoose = require("mongoose");


MiscSchema = new mongoose.Schema({
    item: String,
    weather: String,
  });
  
const Misc = mongoose.model("Misc", MiscSchema);

module.exports = Misc;