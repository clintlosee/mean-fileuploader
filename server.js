var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 3000;
var path = require('path');

var superheroapi = require('./app/routes/superheroapi')();

// Options for the DB connection
var options = {
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

// mongoose.connect('mongodb://closee:SuperheroTest@ds011810.mlab.com:11810/superhero', options); // mlab.com DB
mongoose.connect('mongodb://localhost/superhero', options); // local DB
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

// Log with morgan
app.use(morgan('dev'));

// parse the application/json for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

// Serve the static files
app.use(express.static(__dirname + '/public'));

app.route('/superhero')
    .post(superheroapi.post)
    .get(superheroapi.getAll);
app.route('/superhero/:id')
    .get(superheroapi.getOne);

// Listen on port 3000
app.listen(port);
console.log('Listening on port ' + port);
