const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// create our Express app
const app = express();

//start body-parser configuration
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

// Managing out routes
app.use('/api',require('./routes/index'));
app.get('*', (req, res)=>{
	res.status(404).send({'status':404,'err':'Page not found'});
});

  

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());


// we export it so we can start the site in start.js
module.exports = app;
