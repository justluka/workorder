var Category = require('../models/Categories');
var db = require('../dbConnection');	


exports.getCategories =  (req,res,next) =>{	
	db.query('call uspGetAllCategories()', (err,rows) => {        	
		getResults(res,err,rows);	
	});
	
};

exports.getCategoryByID =  (req,res) =>{
	db.query('call uspGetCategoryByID(?)',req.params.id, (err,rows) =>{        
		getResults(res,err,rows);		       
   });

};



exports.createCategory =  (req,res) =>{
	db.query('call uspCreateCategory(?)',[req.body.categoryDescription],(err,rows) =>{        
		getResults(res,err,rows);	;	   
   });
};



exports.updateCategory =  (req,res) =>{
	db.query('call uspUpdateCategory(?,?)',[req.body.categoryID,req.body.categoryDescription], (err,rows) =>{        
		getResults(res,err,rows);		       
   });

   
};


exports.deleteCategory =  (req,res) =>{
	db.query('call uspDeleteCategory(?)',[req.body.categoryID],(err,rows) =>{        
	 getResults(res,err,rows);			       
   });
};   


 function getResults (res, err,result){

	if(!err) 
		res.end(JSON.stringify({ 'status':200, 'error':null,"response": result}));	
	else
		res.send({'status':500, 'error': err});				 		
	
}