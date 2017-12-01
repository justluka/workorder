const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');
const { catchErrors } = require('../handlers/errorHandlers');

//rest api to get all results for categories
router.get('/categories',categoriesController.getCategories);
router.get('/categories/:id', categoriesController.getCategoryByID);
router.post('/categories/add', categoriesController.createCategory);
router.put('/categories/edit', categoriesController.updateCategory);
router.delete('/categories/delete', categoriesController.deleteCategory);


module.exports = router;

