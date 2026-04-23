const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    category: String,
    description: String,
    language: String,
    notes: [String],
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    completed: {
        type: Boolean,
        default: false
    }

},
{timestamps : true}
)

module.exports = mongoose.model('Task', TaskSchema);
