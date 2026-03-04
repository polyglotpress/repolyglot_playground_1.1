const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LanguageSchema = new Schema({
    language: String,
    languageInNative: String,
    langCode: String,
    spokenIn: [String],
    languageFlagImg: String, //url to flag image

})

module.exports = mongoose.model('Language', LanguageSchema);

//schema model for learning task provided or requested by user