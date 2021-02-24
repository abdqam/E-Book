const BookController = require('../controllers/book.controller');
const UserController = require('../controllers/user.controller');
const CategoryController = require('../controllers/category.controller');
const auth = require('../config/jwt.config')
var multer = require('multer');


module.exports = function(app){
    var storage = multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, '../client/public/img')
        },
        filename: (req, file, callback) => {
            callback(null, file.originalname)
        }
    });
    var upload = multer({ storage: storage });

    app.post('/api/createNewBook', upload.single('upload'), BookController.createBook);
    app.put('/api/books/:id', upload.single('upload'), BookController.updateBook);
    app.get('/api/getAllBooks', BookController.getAllBooks);
    app.delete('/api/books/:id', BookController.deleteBook);
    app.get('/api/books/:id',BookController.getBook);

    app.post('/api/register',UserController.register);
    app.post('/api/login',UserController.login);
    app.get('/api/logout',UserController.logout);
    app.get('/api/tokenuser', auth.authenticate, UserController.findUser);

    app.get('/api/getAllCategories', CategoryController.getAllCategories);
    app.post('/api/createNewCategory', CategoryController.createCategory);
    app.get('/api/catbooks/:name', CategoryController.getCategoryBooks);

}
