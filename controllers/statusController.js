var db = require('../dbConnection');	


exports.getStatus =  (req,res) =>{	
	db.query('call uspGetAllStatus()', (err,rows) => {        	
		getResults(res,err,rows);	
	});
	
};

exports.getStatusByID =  (req,res) =>{
	db.query('call uspGetStatusByID(?)',req.params.id, (err,rows) =>{        
		getResults(res,err,rows);		       
	});

};



exports.createStatus =  (req,res) =>{
	db.query('call uspStatusstatus(?)',[req.body.statusDescription],(err,rows) =>{        
		getResults(res,err,rows);	   
	});
};



exports.updateStatus =  (req,res) =>{
	db.query('call uspUpdateStatus(?,?)',[req.body.statusID,req.body.statusDescription], (err,rows) =>{        
		getResults(res,err,rows);		       
	});

   
};


exports.deleteStatus =  (req,res) =>{
	db.query('call uspDeleteStatus(?)',[req.body.statusID],(err,rows) =>{        
		getResults(res,err,rows);			       
	});
};   


function getResults (res, err,result){

	if(!err) 
		res.status(200).send({ 'status':200, 'error':null,'response': result});
	else
		res.status(500).send({'status':500, 'error': err});				 		
	
}