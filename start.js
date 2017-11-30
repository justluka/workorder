var mysql = require('mysql');


// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });


//start mysql connection
var connection = mysql.createConnection(process.env.DATABASE);
mysql.promise = global.Promise;

connection.connect(function(err) {
	if (err) throw err;
	console.log('You are now connected...');
});
//end mysql connection
 

// import all of our models
require('./models/Categories');


//create app server
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});