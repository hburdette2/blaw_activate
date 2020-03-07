const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    schoolName: {
        type: String
    },
    schoolCountry: String,
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]

})

schoolSchema.pre('save', function (next) {
    // capitalize
    this.schoolName.charAt(0).toUpperCase() + this.schoolName.slice(1);
    next();
});

module.exports = mongoose.model('School', schoolSchema);