var db = require('../dbConnection');
const jwt = require('jsonwebtoken');

var Token;

exports.validateUser =  (req,res) =>{
	// Our payload is basically our user
	const payload={
		user: req.body.userName
	};

	// Let's see if the user is valid
	db.query('call uspValidateUser(?,?)',[req.body.userName, req.body.password],(err,rows) =>{        

		if(!err) {
			//if the user is valid create a tokem
			if(rows[0][0].isValid==1) {
				Token = jwt.sign(payload, process.env.Token, { expiresIn: '24h' });          
				res.status(200).send({
					success: true,
					message: 'Token was created..!',
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
			res.status(500).send({ 'status':200, 'error':null,'response': rows});
		}	

	});

};
