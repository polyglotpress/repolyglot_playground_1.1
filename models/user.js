const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const WordList = new Schema({
    name: String,
    language: String,
    words: [String],
})

const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    nativeLanguage: String,
    languagesLearning: [String],//array of languages per user
    wordLists: [ WordList ],
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }] //array of tasks per user
})

UserSchema.plugin(passportLocalMongoose.default); //username and password



module.exports = mongoose.model('User', UserSchema);
