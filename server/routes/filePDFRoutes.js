const express = require('express')
const router = express.Router()
const notesController = require('../controllers/filePDFController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .post(notesController.createNewFile)


module.exports = router
