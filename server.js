
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
//var router = require('./app/js/router/Router');

var app = express();
var server = http.createServer(app);

app.set('views', __dirname);

app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//router.bind(app);
app.get("/", function(req, res){
	res.sendFile(__dirname + '/app/index.html/');
});

var httpPort = process.env.PORT || 8080;
server.listen(httpPort);
console.log('Initialized on port: '+ httpPort);








