const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// create our Express app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
app.use(function(req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*');
 
	// Request methods you wish to allow
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	);
 
	// Request headers you wish to allow
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-Requested-With,content-type, x-access-token'
	);
 
	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', false);
 
	// Pass to next layer of middleware
	next();
});
// Managing out routes
app.use('/api',require('./routes/index'));
app.get('*', (req, res)=>{
	res.status(404).send({'status':404,'err':'Page not found'});
});

  

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());


// we export it so we can start the site in start.js
module.exports = app;
