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
	db.query('call uspCreateWorkOrder(?)',[req.body.categoryDescription],(err,rows) =>{        
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
		res.status(200).send({ 'status':200, 'error':null,'response': result});
	else
		res.status(500).send({'status':500, 'error': err});				 		
	
}