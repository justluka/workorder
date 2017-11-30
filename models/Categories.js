var db = require('../dbConnection');


const Category={
	
	getAllCategories:(callback) =>{

		return  db.query('call sp_getAllCategories()',callback);
		
	},
    
	getCategoryById:function(id,callback){
   	    return db.query('select * from Categories where Id=?',[id],callback);
	}
};
module.exports=  Category;