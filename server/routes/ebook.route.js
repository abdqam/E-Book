const BookController = require('../controllers/book.controller');
const UserController = require('../controllers/user.controller');
const CategoryController = require('../controllers/category.controller');
const auth = require('../config/jwt.config')

module.exports = function(app){
    app.get('/api/getAllBooks', BookController.getAllBooks);
    app.post('/api/createNewBook', BookController.createBook);
    app.put('/api/books/:id', BookController.updateBook);
    app.delete('/api/books/:id', BookController.deleteBook);

    app.post('/api/register',UserController.register);
    app.post('/api/login',UserController.login);
    app.get('/api/logout',UserController.logout);
    app.get('/api/tokenuser', auth.authenticate, UserController.findUser);

    app.get('/api/getAllCategories', CategoryController.getAllCategories);
    app.post('/api/createNewCategory', CategoryController.createCategory);
    app.put('/api/addbooktocategory/:id', CategoryController.updateCategory);
    app.get('/api/catbooks/:id', CategoryController.getCategoryBooks);

}
