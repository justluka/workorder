var db = require('../dbConnection');	


exports.getWorkOrders =  (req,res) =>{	
	db.query('call uspGetAllWorkOrders()', (err,rows) => {        	
		getResults(res,err,rows);	
	});
	
};

exports.getAllWorkOrdersByStatus =  (req,res) =>{	
	db.query('call uspGetAllWorkOrdersByStatus()', (err,rows) => {        	
		getResults(res,err,rows);	
	});
	
};


exports.getArchivedWorkOrders =  (req,res) =>{	
	db.query('call uspGetAllArchivedWorkOrders()', (err,rows) => {        	
		getResults(res,err,rows);	
	});
	
};


exports.getWorkOrderByID =  (req,res) =>{

	db.query('call uspGetWorkOrderByID(?)',[req.params.id ], (err,rows) =>{        
		getResults(res,err,rows);		       
	});

};


exports.getWorkOrderByUser =  (req,res) =>{

	db.query('call uspGetWorkOrdersByUser(?)',[req.params.id ], (err,rows) =>{        
		getResults(res,err,rows);		       
	});

};


exports.getWorkOrdersByCategory =  (req,res) =>{

	db.query('call uspGetWorkOrdersByCategory(?)',[req.params.id ], (err,rows) =>{        
		getResults(res,err,rows);		       
	});

};


exports.getResourcesByWorkOrder =  (req,res) =>{

	db.query('call uspGetResourcesByWorkOrderID(?)',[req.params.id ], (err,rows) =>{        
		getResults(res,err,rows);		       
	});

};



exports.deleteResourcesByWorkOrder =  (req,res) =>{
	db.query('call uspDeleteResourcesByWorkOrderID(?)',[req.params.id], 
		(err,rows) =>{        
			getResults(res,err,rows);		       
		});

};


exports.createWorkOrder=  (req,res) =>{

	db.query('call uspCreateWorkOrder(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[req.body.category,
		1,
		req.body.status,
		req.body.title,
		req.body.description,
		req.body.propouseHours,
		req.body.actualHours,
		req.body.document,
		req.body.signedUrl,
		req.body.signedDate,
		req.body.startedDate,
		req.body.completedDate,
		req.body.releasedTestDate,
		req.body.releasedProductionDate,
		req.body.notes,
		req.body.lastUpdateByUser],																	
																	
	(err,rows) =>{        
		getResults(res,err,rows);	   
	});
};

exports.addResources=  (req,res) =>{
	db.query('call uspAddResources(?,?)',[req.body.WorkOrderID,
		req.body.UserName],																	
																	
	(err,rows) =>{        
		getResults(res,err,rows);	   
	});
};



exports.updateWorkOrder =  (req,res) =>{
	db.query('call uspUpdateWorkOrder(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
		req.body.workOrderID,
		req.body.category,
		req.body.status,
		req.body.title,
		req.body.description,
		req.body.propouseHours,
		req.body.actualHours,
		req.body.document,
		req.body.signedUrl,
		req.body.signedDate,
		req.body.startedDate,
		req.body.completedDate,
		req.body.releasedTestDate,
		req.body.releasedProductionDate,
		req.body.notes,
		req.body.lastUpdateByUser],																	
																	
	(err,rows) =>{        
		getResults(res,err,rows);	   
	});
   
};



exports.updateWorkOrderPriority =  (req,res) =>{
	db.query('call uspUpdateWorkOrderPriority(?,?)',[
		req.body.WorkOrderID,
		req.body.Priority],																	
																	
	(err,rows) =>{        
		getResults(res,err,rows);	   
	});
   
};


exports.archiveWorkOrder =  (req,res) =>{
	db.query('call uspArchiveWorkOrder(?)',[
		req.body.WorkOrderID],																	
																	
	(err,rows) =>{        
		getResults(res,err,rows);	   
	});
   
};

exports.activateWorkOrder =  (req,res) =>{
	db.query('call uspActivateWorkOrder(?)',[
		req.body.WorkOrderID],																	
																	
	(err,rows) =>{        
		getResults(res,err,rows);	   
	});
   
};

exports.deleteWorkOrder =  (req,res) =>{
	db.query('call uspDeleteWorkOrder(?)',[req.params.id],(err,rows) =>{        
		getResults(res,err,rows);			       
	});
};   


function getResults (res, err,result){

	if(!err) 
		res.status(200).send({ 'status':200, 'error':null,'response': result[0]});
	else
		res.status(500).send({'status':500, 'error': err});				 		
	
}