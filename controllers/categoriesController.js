var Category = require('../models/categories');

exports.getCategories =  (req,res) =>{
 	Category.getAllCategories(function(err,rows){        
		if(err)	
       		res.json(err);
		else		
			res.end(JSON.stringify(rows[0]));		       
	});
};