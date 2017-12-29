var db = require('../dbConnection');	


exports.getWorkOrders =  (req,res) =>{	
	db.query('call uspGetAllWorkOrders()', (err,rows) => {        	
		getResults(res,err,rows);	
	});
	
};


exports.getWorkOrdersByCategory =  (req,res) =>{	
	db.query('call uspGetWorkOrdersByCategory()', (err,rows) => {        	
		getResults(res,err,rows);	
	});
	
};


exports.getWorkOrderByID =  (req,res) =>{
	db.query('call uspGetWorkOrderByID(?)',req.params.id, (err,rows) =>{        
		getResults(res,err,rows);		       
	});

};



exports.createWorkOrder=  (req,res) =>{
	db.query('call uspCreateWorkOrder(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[req.body.workorder.category,
																	1,
																	req.body.workorder.status,
																	req.body.workorder.description,
																	req.body.workorder.propouseHours,
																	req.body.workorder.actualHours,
																	req.body.workorder.document,
																	req.body.workorder.signedDate,
																	req.body.workorder.startedDate,
																	req.body.workorder.completedDate,
																	req.body.workorder.releasedTestDate,
																	req.body.workorder.releasedProductionDate,
																	req.body.workorder.notes,
																	req.body.workorder.lastUpdateByUser],																	
																	
	(err,rows) =>{        
		getResults(res,err,rows);	   
	});
};



exports.updateWorkOrder =  (req,res) =>{
	db.query('call uspUpdateWorkOrder(?,?)',[req.body.categoryID,req.body.categoryDescription], (err,rows) =>{        
		getResults(res,err,rows);		       
	});

   
};


exports.deleteWorkOrder =  (req,res) =>{
	db.query('call uspDeleteWorkOrder(?)',[req.body.categoryID],(err,rows) =>{        
		getResults(res,err,rows);			       
	});
};   


function getResults (res, err,result){

	if(!err) 
		res.status(200).send({ 'status':200, 'error':null,'response': result[0]});
	else
		res.status(500).send({'status':500, 'error': err});				 		
	
}