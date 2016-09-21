'use strict';

var express = require('express');
var router = require('./api/index');
var path = require('path');
var parser = require('body-parser');
require('./database.js')


var app = express();



app.use(parser.json());
app.use('/api', router);
app.use('/static', express.static(path.join('..', '/public')));



app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '..', 'public', 'html', 'index.html'));
})


app.listen(3000, function(){
	console.log('Node server is running on port 3000!');
});








