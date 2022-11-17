const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.pdf' || ext !== '.doc' || ext !== '.docx' || ext !== '.pptx') {
            return cb(response.status(400).end('only pdf file formats are allowed'), false);
        }
        cb(null, true)
    }
})

const upload = multer({ storage: storage }).single("file")

const uploadFile = async(request, response) => {
    //let fileName = ""
    console.log(request)
    upload(request, response, err => {
        if (err) {
            return response.json({success: false, err})
        }
        //fileName = response.req.file.filename;
        return response.json({success: true,
            /*fileName: response.req.file.filename*/
        })
    })
    /*const file = new File(request.body.username,fileName);

    await file.save();*/
}

module.exports = {uploadFile}
