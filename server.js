//requires
var express = require('express');
var app 	= express();
//var path 	= require('path');
var port 	= 1000;
//var bodyParser  = require('body-parser');

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.use(express.static('dist'))
app.use(express.static('vendor'))
app.use(express.static('views'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port);
console.log('Running on http://localhost:' + port);



