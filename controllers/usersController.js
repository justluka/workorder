var db = require('../dbConnection');	


exports.getAllUsers =  (req,res) =>{	
	db.query('call uspGetAllUsers()', (err,rows) => {        	
		getResults(res,err,rows);	
	});
	
};

exports.getUserByID =  (req,res) =>{
	db.query('call uspGetUserByID(?)',req.params.id, (err,rows) =>{        
		getResults(res,err,rows);		       
	});

};


exports.createUser =  (req,res) =>{
	db.query('call uspCreateUser(?)',[req.body.categoryDescription],(err,rows) =>{        
		getResults(res,err,rows);	   
	});
};


exports.updateUser =  (req,res) =>{
	db.query('call uspUpdateUser(?,?)',[req.body.categoryID,req.body.categoryDescription], (err,rows) =>{        
		getResults(res,err,rows);		       
	});

   
};

exports.deleteUser =  (req,res) =>{
	db.query('call uspDeleteUser(?)',[req.body.categoryID],(err,rows) =>{        
		getResults(res,err,rows);			       
	});
};   

function getResults (res, err,result){

	if(!err) 
		res.status(200).send({ 'status':200, 'error':null,'response': result});
	else
		res.status(500).send({'status':500, 'error': err});				 		
	
}