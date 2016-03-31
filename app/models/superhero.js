// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Superhero Schema
var SuperheroSchema = new Schema({
    name: {type: String, required: true},
    gender: {type: String, required: true},
    superPowers: {type: String, required: true},
    picture: {type: Schema.Types.Mixed, required: true},
    morePictures: {type: Schema.Types.Mixed}, // not required
    createdAt: {type: Date, default: Date.now}
});

// Set the createdAt parameter equal to the current time
SuperheroSchema.pre('save', function(next) {
    now = new Date();
    if (!this.createdAt) {
        this.createdAt = now
    }
    next();
});

// Export the SuperheroSchema
module.exports = mongoose.model('superhero', SuperheroSchema);
