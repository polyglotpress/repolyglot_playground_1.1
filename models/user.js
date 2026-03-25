const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const WordList = new Schema({
    name: String,
    language: String,
    category: String,
    words: [String],
    description: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
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
    about: String,
    languagesLearning: [String],//array of languages per user
    wordLists: [ WordList ],
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }] //array of tasks per user
},
    {timestamps : true} //now has user.createdAt and user.updatedAt :)

)

UserSchema.plugin(passportLocalMongoose.default); //username and password



module.exports = mongoose.model('User', UserSchema);
