const express = require('express')
const router = express.Router()
const fileController = require('../controllers/fileController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .post(fileController.addNewFile)

module.exports = router
