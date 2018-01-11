const aws = require('aws-sdk');
const request = require('request');
const fs = require('fs');
var secrets = require('../secrets');

const s3 = new aws.S3({
	signatureVersion: 'v4',
	region: 'us-east-2',
});



exports.signedRequest= (req,res) =>{
	const fileName= req.query['file-name'];
	const fileType= req.query['file-type'];
	
	const s3Params={
		Bucket: secrets.aws_bucket,
		Key: fileName,
		ContentType: fileType,
		ACL:'private' //Access Control,
	};
	
	s3.getSignedUrl('putObject',s3Params,(err,data)=>{
		if(err){
			
			return res.end();
		}
		const returnData ={
			signedRequest: data,
			url: `https://${secrets.aws_bucket}.s3.amazon.com/${fileName}`
		};

		return res.json(returnData);
	});
};

exports.getFileSignedRequest= (req,res) =>{
	const s3Params={
		Bucket: secrets.aws_bucket,
		Key: req.query['fileName'],
        
	};
    
	s3.getSignedUrl('getObject', s3Params, (err,data)=>{
		if(err){
			return res.end();
		}
		res.status(200).send({ 'status':200, 'error':null,'response': data});
	});
};


exports.listFiles= (req,res) =>{
	const s3Params={
		Bucket: secrets.aws_bucket,
		Delimiter: '/'        
	};
    
	s3.listObjects(s3Params, (err,data)=>{
		if(err){
			return res.end();
		}
        
		res.status(200).send({ 'status':200, 'error':null,'response': data});
	});
};


exports.deleteFile= (req,res) =>{
	const s3Params={
		Bucket: secrets.aws_bucket,
		Key: req.query['fileName']
	};
    
	s3.deleteObject(s3Params, (err,data)=>{
		if(err){
			return res.status(200).send({'msg':'File Cagada.' });
		}
        
		return res.status(200).send({'msg':'File Deleted.' });
	});
};

