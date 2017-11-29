const mysql = require('mysql');
mysql.Promise - global.Promise;

const Category={
	
   getAllCategories:function(callback){
	
      return connection.query("Select * Caterogies task",callback);
	
   },
	getCategoryById:function(id,callback){
	
   	return db.query("select * from Categories where Id=?",[id],callback);
	}
   };
	module.exports=  Category;