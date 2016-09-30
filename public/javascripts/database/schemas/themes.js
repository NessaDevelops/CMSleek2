var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var themeSchema = new Schema({
    background: { type: String, required: true },
    foreground: { type: String, required: true },
    primaryFont: { type: String, required: true },
    secondaryFont: { type: String, required: true },
    roundedCorners: { type: Boolean, required: true },
    navigation: { type: String, required: true }
});

themeSchema.pre('save', function (next) {

    var theme = this;
    next();
});

var Theme = mongoose.model('Theme', themeSchema);

module.exports = Theme;