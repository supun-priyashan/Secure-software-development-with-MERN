const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const messageSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        title: {
            type: String,
            required: true
        },
        text: {
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

module.exports = mongoose.model('Message', messageSchema)