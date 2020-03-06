const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    schoolName: String,
    schoolCountry: String,
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]

})

module.exports = mongoose.model('School', schoolSchema);