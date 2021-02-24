const { Book } = require('../models/book.model');
const { Category } = require('../models/category.model');


module.exports.getAllBooks = (request, response) => {
    Book.find({})
        .then(books => response.json(books))
        .catch(err => response.json({message:"something went wrong",error:err}))
}
module.exports.createBook = (request, response, next) => {
        console.log(request.file.originalname)
        var obj = {
            name: request.body.name,
            description: request.body.description,
            url:request.body.url,
            image: request.file.originalname,
        }
        Book.create(obj)
        .then(book =>{
            Category.findOneAndUpdate({name: request.body.category},{$addToSet:{books:book._id}}, {new:true}).populate('books')
            .then(created => response.json(created))
            response.json(book)
        })
        .catch(err => console.log(err))
    }


module.exports.deleteBook = (request, response) => {
    Book.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
module.exports.updateBook = (request, response, next) => {
    Book.findById(request.params.id)
    .then(book =>{
        book.name = request.body.name;
        book.description = request.body.description;
        book.url = request.body.url;
        book.image = request.file.originalname;

        book
            .save()
            .then(updated =>response.json("Updated"))
            .catch(err => response.status(400).json(err))
    })
    .catch(err => response.status(400).json(err));
}

module.exports.getBook = (request, response) => {
    Book.findOne({_id:request.params.id})
        .then(book => response.json(book))
        .catch(err => response.json(err))
}



