const { Category } = require('../models/category.model');
module.exports.createCategory = (request, response) => {
    Category.create(request.body)
        .then(category => response.json(category))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllCategories = (request, response) => {
    Category.find({})
        .then(categories => response.json(categories))
        .catch(err => response.json({message:"something went wrong",error:err}))
}

module.exports.updateCategory = (request, response) => {
    const {id} =request.body;
    Category.findOneAndUpdate({_id: request.params.id},{$addToSet:{books:id}}, {new:true})
        .then(updatedcategory => response.json(updatedcategory))
        .catch(err => response.json(err))
}

module.exports.getCategoryBooks = (request, response) => {
    Category.findOne({_id:request.params.id}).populate('books')
        .then(category => response.json(category))
        .catch(err => response.json(err))
}



