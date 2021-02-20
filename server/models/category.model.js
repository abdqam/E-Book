const mongoose = require('mongoose');
require("./book.model")
const CategorySchema = new mongoose.Schema({
    name: { type: String ,
        required:[true,"Category name is required"],
        minlength:[3,'Category name should be at least 3 characters'],
},
    books:[{type:mongoose.Schema.Types.ObjectId, ref: 'Book' }],

}, { timestamps: true });
module.exports.Category = mongoose.model('Category', CategorySchema);