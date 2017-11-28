const mysql = require('mysql');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });


// Connect to our Database 
var db= mysql.createConnection(process.env.DATABASE);
db.on('error', (err) => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
    
  });

mysql.Promise = global.Promise; //Tell Mysql to use Promisses


// Imports all models here


//start our app
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});


