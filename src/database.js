'use strict';

var mongoose  = require('mongoose')

mongoose.connect('mongodb://localhost/mean-todo', function(err){
	if(err){
		console.log('FAILED connecting to mongodb')
	}else{
		console.log('SUCCESFULY connected to mongodb')
	}
	
});

