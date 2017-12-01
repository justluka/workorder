var Category = require('../models/Categories');



exports.getCategories =  (req,res) =>{
 	Category.getAllCategories((err,rows) => {        
		if(err)	{
			res.json(err);
			return;
		}	   
		res.end(JSON.stringify(rows[0]));		       
	});
};

exports.getCategoryByID =  (req,res) =>{
	Category.getCategoryById(req.params.id, (err,rows) =>{        
		if(err)	{
			res.json(err);
			return;
		}	   
		res.end(JSON.stringify(rows[0]));		       
   });
};



exports.createCategory =  (req,res) =>{
	Category.createCategory(req.body,(err,rows) =>{        
		if(err)	{
			res.json(err);
			return;
		}	   
		res.end(JSON.stringify(rows[0]));	   
   });
};



exports.updateCategory =  (req,res) =>{
	Category.updateCategory(req.body, (err,rows) =>{        
		if(err)	{
			res.json(err);
			return;
		}	   
		res.end(JSON.stringify(rows[0]));			       
   });

   
};


exports.deleteCategory =  (req,res) =>{
	Category.deleteCategory(req.body,(err,rows) =>{        
	   if(err)	
			  res.json(err);
	   else		
		   res.end(JSON.stringify(rows.affectedRows));		       
   });
};   