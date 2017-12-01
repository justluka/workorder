const express = require('express');
const bodyParser = require('body-parser');
const errorHandlers = require('./handlers/errorHandlers');
const cookieParser = require('cookie-parser');
var mysql=require('mysql');

// create our Express app
const app = express();


//start body-parser configuration
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

// Managing out routes
app.use(require('./routes/index'));
app.get('*', (req, res)=>{
	res.status(404).send({'status':404,'err':'Page not found'});
});

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());


// we export it so we can start the site in start.js
module.exports = app;
