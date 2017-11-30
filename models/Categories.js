var db = require('../dbConnection');


const Category={
	
	getAllCategories:(callback) =>{
		return  db.query('call uspGetAllCategories()',callback);		
	},
    
	getCategoryById: (id,callback) =>{
   	    return db.query('call uspGetCategoryByID(?)',id,callback);
	},

	createCategory: (objCategory, callback) =>{
		return db.query('call uspCreateCategory(?)',[objCategory.categoryDescription],callback);
	},

	updateCategory: (objCategory, callback) =>{
		return db.query('call uspUpdateCategory(?,?)',[objCategory.categoryID,objCategory.categoryDescription],callback);
	},

	deleteCategory: (objCategory, callback) =>{
		return db.query('call uspDeleteCategory(?)',[objCategory.categoryID],callback);
	}
};
module.exports=  Category;