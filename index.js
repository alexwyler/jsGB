var express = require('express');

var app = express();

console.log(__dirname + '/');
app.use('/', express.static(__dirname + '/'));

var port = process.env.PORT || 80;
console.log('Attempting to listen on port ' +  port + '...');
app.listen(port);