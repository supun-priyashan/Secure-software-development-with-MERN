const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const fileSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        fileName: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

messageSchema.plugin(AutoIncrement, {
    inc_field: 'messageID',
    id: 'messageIDs',
    start_seq: 1000
})

module.exports = mongoose.model('file', fileSchema)
