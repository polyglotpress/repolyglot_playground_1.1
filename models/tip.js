const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipSchema = new Schema({
    title: String,
    category: String,
    details: String,
    language: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    isAnonymous: {
        type: Boolean,
        default: false
    },
    hashtags:[String]
   
},
{timestamps : true}
)

module.exports = mongoose.model('Tip', TipSchema);
