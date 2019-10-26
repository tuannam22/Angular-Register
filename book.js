const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    Name : String,
    Image : String,
    File: String
});

module.exports = mongoose.model("Book", BookSchema); // Book ten bang trong database
