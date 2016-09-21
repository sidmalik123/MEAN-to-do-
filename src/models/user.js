'use strict'

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	email : {
		type: String,
		required: true,
	    trim: true,
	    unique: true,
	},
	name : {
		type: String,
		required: true,
		trim : true,
	},
})

var model = mongoose.model('User',  userSchema);

module.exports = model;