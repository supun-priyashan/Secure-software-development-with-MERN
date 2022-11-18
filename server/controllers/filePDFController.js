const Note = require('../models/Note')
const User = require('../models/User')

// @desc Create new note
// @route POST /notes
// @access Private
const createNewFile = async (req, res) => {
    const { user, filename } = req.body

    // Confirm data
    if (!user || !filename) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate title
    const duplicate = await Note.findOne({ filename }).collation({ locale: 'en', strength: 2 }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate note title' })
    }

    // Create and store the new user
    const note = await Note.create({ user, filename})

    if (note) { // Created
        return res.status(201).json({ message: 'New note created' })
    } else {
        return res.status(400).json({ message: 'Invalid note data received' })
    }

}

module.exports = {
    createNewFile,
}
