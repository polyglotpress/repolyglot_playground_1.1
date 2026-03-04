const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    username: String,
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    // nativeLanguage: String,
    // languages: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Language"
    // }],//array of languages per user
    // tasks: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Task"
    // }]
})


module.exports = mongoose.model('User', UserSchema);
