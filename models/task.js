const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    category: String,
    description: String,
    language: String,
    notes: [{
        noteDetails: String
    }]

})

module.exports = mongoose.model('Task', TaskSchema);

//schema model for learning task provided or requested by user