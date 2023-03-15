const express = require('express');
require('dotenv').config();
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

//regular middleware
app.use(express.json());

// it uses "form-urlencoded" or "form-data", so the data is sent via url by encoding the data
app.use(express.urlencoded({ extended: true }));

//cookies and file middleware
app.use(cookieParser());

//fileUpload middleware used to setup a temporary dir untill the file uploading process complete
app.use(fileUpload({ useTempFiles: true, tempFileDir: '/tmp/' }));

// this calls the "views" folder implicitly where the ejs files are excisted
app.set('view engine', 'ejs');

//morgan middleware for logging HTTP request
app.use(morgan('tiny'));

//importing all routes
const home = require('./routes/home');

//router middleware
app.use('/api/v1', home);

module.exports = app;
