const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    file: {
        type: String,
        default: ''
    }
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
