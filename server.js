var express = require('express');
var app = express();

var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/src/favicon.ico'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://cranewing-toppiks-3595918:27017/toppiks');

var picks = require('./server/routes/picks');
var users = require('./server/routes/users');

var port = process.env.PORT || 3000;
app.use(logger('dev'));

app.use(cors({
	credentials: true,
	origin: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/src'));

app.use('/api/picks', picks);
app.use('/api/users', users);

app.get('*', function(req, res) {
	res.redirect('/#' + req.originalUrl);
});

app.use(function(error, req, res, next) {
	console.error(error.stack);
	res.send(500, { message: error.message });
});

app.listen(port, function() {
  console.log('Wingardium leviosa! Magic at port ' + port);
});
