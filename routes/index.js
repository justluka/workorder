const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');
const statusController = require('../controllers/statusController');
const workOrderController = require('../controllers/workOrderController');
const authenticateController = require('../controllers/authenticateController');
const awsController = require('../controllers/awsController');

const jwt = require('jsonwebtoken');


//Authenticate
router.post('/authenticate',authenticateController.validateUser);

//aws Controller
router.get('/aws/sign',awsController.signedRequest);
router.get('/aws/files',awsController.listFiles);
router.get('/aws/files/:fileName',awsController.getFileSignedRequest);
router.delete('/aws/files/:fileName',awsController.deleteFile);


//route middleware to verify a token
router.use(function(req, res, next) {
	if(req.method ==='OPTIONS') res.status(200).send({success:true});
	var allowedRoutes=['/authenticate'];

	// check header or url parameters or post parameters for token
	var token = req.body.token || req.query.token || req.headers['x-access-token'];
	if (req.method==='POST' && req.path ===allowedRoutes){
		next();
	}
	else{

		if (token) {
			
			// verifies secret and checks exp
			jwt.verify(token, process.env.Token, function(err, decoded) {      
				if (err) {
					return res.json({ success: false, message: 'Failed to authenticate token.' });    
				} else {
					// if everything is good, save to request for use in other routes
					req.decoded = decoded;    
					next();
				}
			});
			
		} else {
			
			// if there is no token
			// return an error
			return res.status(403).send({ 
				success: false, 
				message: 'No token provided.' ,
				path: req.path,
				method: req.method
			});
			
		}


	}
	// decode token
	
});

//rest api managing workorders
router.get('/workorders', workOrderController.getWorkOrders);
router.get('/workorders/:id', workOrderController.getWorkOrderByID);
router.get('/workordersByCategory/:id', workOrderController.getWorkOrdersByCategory);
router.post('/workorder/add', workOrderController.createWorkOrder);
router.put('/workorder/edit', workOrderController.updateWorkOrder);
router.delete('/workorder/delete', workOrderController.deleteWorkOrder);




//rest api to get all results for categories
router.get('/categories',categoriesController.getCategories);
router.get('/categories/:id', categoriesController.getCategoryByID);
router.post('/categories/add', categoriesController.createCategory);
router.put('/categories/edit', categoriesController.updateCategory);
router.delete('/categories/delete', categoriesController.deleteCategory);




//rest api to get all results for status
router.get('/status',statusController.getStatus);
router.get('/status/:id', statusController.getStatusByID);
router.post('/status/add', statusController.createStatus);
router.put('/status/edit', statusController.updateStatus);
router.delete('/status/delete', statusController.deleteStatus);

module.exports = router;

