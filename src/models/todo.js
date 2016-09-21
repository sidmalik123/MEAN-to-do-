'use strict'

var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
	userid : String,
	name : String,
	completed : Boolean,
})

var model = mongoose.model('Todo',  todoSchema);

module.exports = model;
