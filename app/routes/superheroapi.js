// Dependencies
var mongoose = require('mongoose');
var Superhero = require('../models/superhero');

// App routes
module.exports = function() {
    return {
        // Get route to retrieve all superheroes
        getAll: function(req, res) {
            // Query the DB and if no errors, send all the data
            var query = Superhero.find({});
            query.exec(function(err, superheroes) {
                if (err) res.send(err);
                // if no errors, sent them back to client
                res.json(superheroes);
            });
        },
        // POST route to save new superhero
        post: function(req, res) {
            // Creates a new superhero
            var newSuperhero = new Superhero(req.body);
            // Save it to the DB
            newSuperhero.save(function(err) {
                if (err) res.send(err);
                // if no errors, send it back to client
                res.json(req.body);
            });
        },
        // Get route to get superhero based on id
        getOne: function(req, res) {
            Superhero.findById(req.params.id, function(err, superhero) {
                if (err) res.send(err);
                // if no errors, send it back to client
                res.json(superhero);
            });
        }
    }
};
