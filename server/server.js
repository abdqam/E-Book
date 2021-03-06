const express = require("express")
const cors = require("cors");
var bodyParser = require('body-parser');
const app = express();
const port = 8000;
require("./config/mongoose.config");
require('dotenv').config();
const myFirstSecret = process.env.SECRET_KEY;
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require("./routes/ebook.route")(app);
app.listen(port,() => console.log("The server is running on port: "+ port));