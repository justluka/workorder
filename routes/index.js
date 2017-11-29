const express = require('express');
const router = express.Router();
const path = require('path');
var mysql      = require('mysql');

require('dotenv').config({ path: 'variables.env' });
var connection = mysql.createConnection(process.env.DATABASE);

 
//rest api to get all results
router.get('/categories', function (req, res) {
    connection.query('select * from categories', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
  
 //rest api to get a single employee data
 router.get('/employees/:id', function (req, res) {
    console.log(req);
    connection.query('select * from employee where id=?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
  
 //rest api to create a new record into mysql database
 router.post('/employees', function (req, res) {
    var postData  = req.body;
    connection.query('INSERT INTO employee SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
  
 //rest api to update record into mysql database
 router.put('/employees', function (req, res) {
    connection.query('UPDATE `employee` SET `employee_name`=?,`employee_salary`=?,`employee_age`=? where `id`=?', [req.body.employee_name,req.body.employee_salary, req.body.employee_age, req.body.id], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
  
 //rest api to delete record from mysql database
 router.delete('/employees', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `employee` WHERE `id`=?', [req.body.id], function (error, results, fields) {
    if (error) throw error;
    res.end('Record has been deleted!');
  });
 });

module.exports = router;

