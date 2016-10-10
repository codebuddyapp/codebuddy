var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://0.0.0.0:27017/mydb");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log('we are connected!');
});


var UserSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    userName: String,
    firstName: String,
    lastName: String,
    description: String,
    progLanguage: Array,
    socialLinks: [{
        github: String,
        facebook: String,
        freecodecamp: String,
        linkedin: String,
    }],
    userImage: String
});

var EventSchema = new Schema({
    progLanguage: Array,
    speakLanguages: String,
    dates: Date,
    comment: String,
    level: String, 
    tags: Array
});

module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('Event', EventSchema);