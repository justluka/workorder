var http = require("http");
var express = require('express');
var app = express();
const path = require('path');
var mysql      = require('mysql');
var bodyParser = require('body-parser');
const routes = require('./routes');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });


//start mysql connection
var connection = mysql.createConnection(process.env.DATABASE);
                 mysql.promise = global.Promise;

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})
//end mysql connection
 
//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));



// import all of our models
require('./models/Categories');

//end body-parser configuration

app.use(require('./routes/index'));

//create app server
var server = app.listen(3000,  "127.0.0.1", function () {
  var host = server.address().address
  var port = server.address().port
  console.log("App listening at http://%s:%s", host, port)
 
});
 
 
/*
//rest api to get all results
app.get('/employees', function (req, res) {
   connection.query('select * from categories', function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});
 
//rest api to get a single employee data
app.get('/employees/:id', function (req, res) {
   console.log(req);
   connection.query('select * from employee where id=?', [req.params.id], function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});
 
//rest api to create a new record into mysql database
app.post('/employees', function (req, res) {
   var postData  = req.body;
   connection.query('INSERT INTO employee SET ?', postData, function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});
 
//rest api to update record into mysql database
app.put('/employees', function (req, res) {
   connection.query('UPDATE `employee` SET `employee_name`=?,`employee_salary`=?,`employee_age`=? where `id`=?', [req.body.employee_name,req.body.employee_salary, req.body.employee_age, req.body.id], function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});
 
//rest api to delete record from mysql database
app.delete('/employees', function (req, res) {
   console.log(req.body);
   connection.query('DELETE FROM `employee` WHERE `id`=?', [req.body.id], function (error, results, fields) {
   if (error) throw error;
   res.end('Record has been deleted!');
 });
});
*/