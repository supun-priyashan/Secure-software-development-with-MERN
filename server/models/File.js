const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    }
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
