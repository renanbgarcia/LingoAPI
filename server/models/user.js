var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    email: String,
    photo: String,
    googleUser_id: String,
    level: String,
    score: Number,
    resources:
      {words: [{ 
        word: String,
        meaning: String,
        howKnown: String,
        EF: Number,
        nextRevision: String,
        reviewedTimes: Number,
        lang: String,
        lastHowKnown: Date}],
      quote: [{
        quote: String,
        source: String
    }]},
    meta: 0
    
});

var userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;