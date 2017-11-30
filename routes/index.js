const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');
var db = require('../dbConnection');

//rest api to get all results
router.get('/categories', categoriesController.getCategories);
/*
router.get('/categories', function (req, res) {
	db.query('select * from categories', function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});
 
*/

//rest api to get a single categories data
router.get('/categories/:id', function (req, res) {
	console.log(req);
	db.query('select * from categories where id=?', [req.params.id], function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});
  
//rest api to create a new record into mysql database
router.post('/categories', function (req, res) {
	var postData  = req.body;
	db.query('INSERT INTO categories SET ?', postData, function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});
  
//rest api to update record into mysql database
router.put('/categories', function (req, res) {
	db.query('UPDATE `categories` SET `categories_name`=?,`categories_salary`=?,`categories_age`=? where `id`=?', [req.body.categories_name,req.body.categories_salary, req.body.categories_age, req.body.id], function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});
  
//rest api to delete record from mysql database
router.delete('/categories', function (req, res) {
	console.log(req.body);
	db.query('DELETE FROM `categories` WHERE `id`=?', [req.body.id], function (error, results, fields) {
		if (error) throw error;
		res.end('Record has been deleted!');
	});
});

module.exports = router;

