const { Book } = require('../models/book.model');
module.exports.createBook = (request, response) => {
    Book.create(request.body)
        .then(book => response.json(book))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllBooks = (request, response) => {
    Book.find({})
        .then(books => response.json(books))
        .catch(err => response.json({message:"something went wrong",error:err}))
}

module.exports.deleteBook = (request, response) => {
    Book.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
module.exports.updateBook = (request, response) => {
    Book.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedBook => response.json(updatedBook))
        .catch(err => response.json(err))
}

module.exports.getBook = (request, response) => {
    Book.findOne({_id:request.params.id})
        .then(book => response.json(book))
        .catch(err => response.json(err))
}



