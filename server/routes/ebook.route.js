const BookController = require('../controllers/book.controller');
const UserController = require('../controllers/user.controller');
const CategoryController = require('../controllers/category.controller');
const { Book } = require('../models/book.model');
const auth = require('../config/jwt.config')
var multer = require('multer');


module.exports = function(app){
    app.get('/api/getAllBooks', BookController.getAllBooks);
    app.put('/api/books/:id', BookController.updateBook);
    app.delete('/api/books/:id', BookController.deleteBook);
    app.get('/api/books/:id',BookController.getBook)

    app.post('/api/register',UserController.register);
    app.post('/api/login',UserController.login);
    app.get('/api/logout',UserController.logout);
    app.get('/api/tokenuser', auth.authenticate, UserController.findUser);

    app.get('/api/getAllCategories', CategoryController.getAllCategories);
    app.post('/api/createNewCategory', CategoryController.createCategory);
    app.put('/api/addbooktocategory/:id', CategoryController.updateCategory);
    app.get('/api/catbooks/:id', CategoryController.getCategoryBooks);

    var storage = multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, '../client/src/img')
        },
        filename: (req, file, callback) => {
            callback(null, file.originalname)
        }
    });
    var upload = multer({ storage: storage });
    app.post('/api/createNewBook', upload.single('upload'), (request, response, next) => {
        var obj = {
            name: request.body.name,
            description: request.body.description,
            url:request.body.url,
            image: request.file.originalname,
        }
        Book.create(obj)
        .then(response =>console.log(response.data))
        .catch(err => console.log(err))
    });
}
