const mongoose = require("mongoose");


ToDoSchema = new mongoose.Schema({
    item: String,
  });
  
const ToDo = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDo;