const express = require('express');
const bodyParser = require('body-parser');
const errorHandlers = require('./handlers/errorHandlers');

// create our Express app
const app = express();


//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

// Managing out routes
app.use(require('./routes/index'));

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// we export it so we can start the site in start.js
module.exports = app;
