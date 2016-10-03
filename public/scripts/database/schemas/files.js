var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fileSchema = new Schema({
    name: { type: String, required: true },
    ext: { type: String, required: true },
    path: { type: String, required: true }
});

fileSchema.pre('save', function (next) {

    var file = this;
    next();
});

var File = mongoose.model('File', fileSchema);

module.exports = File;