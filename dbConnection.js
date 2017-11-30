
var mysql=require('mysql');
var connection=mysql.createPool(process.env.DATABASE);
module.exports=connection;