var db = require('../dbConnection');
const jwt = require('jsonwebtoken');

var Token;

exports.validateUser =  (req,res) =>{
	// Our payload is basically our user
	const payload={
		user: req.body.userName
	};
	

	// Let's see if the user is valid
	db.query('call uspValidateUser(?,?)',[req.body.userName, req.body.password],(err,result) =>{        
		
		if(!err) {
			//if the user is valid create a tokem
			if(result[0].length==1) {
				
				Token = jwt.sign(payload, process.env.Token, { expiresIn: '24h' });          
				res.status(200).send({
					user: result[0][0],
					token: Token
				}); 
			}
			else{
				res.status(500).send({
					success: false,
					message: 'User/password Invalid..!'
				}); 	
			}
		}  // End if no error    
	
		else {
			res.status(500).send({ 'status':500, 'error':err});
		}	

	});

};
