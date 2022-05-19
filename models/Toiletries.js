const mongoose = require("mongoose");


ToiletriesSchema = new mongoose.Schema({
    item: String,
  });
  
const Toiletries = mongoose.model("Toiletries", ToiletriesSchema);

module.exports = Toiletries;