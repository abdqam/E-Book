const mongoose = require('mongoose');
const Category = require('../models/category.model')
const BookSchema = new mongoose.Schema({
    name: {
        type: String ,
        required:[true,"name is required"],
        minlength:[3,'Name should be at least 3 characters'],
},
    image: { type: String ,
},
    description: { 
        type: String ,
        required:[true,"description is required"],
        minlength:[10,'description should be at least 3 characters'],
},
    url: {
        type: String ,
        required:[true,"image is required"],
},

}, { timestamps: true });
module.exports.Book = mongoose.model('Book', BookSchema);