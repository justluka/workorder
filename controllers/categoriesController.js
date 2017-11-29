const mysql = require('mysql');

var db= mysql.createConnection(process.env.DATABASE);
