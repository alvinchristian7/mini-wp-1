// const GOOGLE_CLOUD_PROJECT_ID = 'gcs-demo-123456'; // Replace with your project ID
// const GOOGLE_CLOUD_KEYFILE = 'path-to-the-private-key'; // Replace with the path to the downloaded private key
const { Storage } = require('@google-cloud/storage')

const CLOUD_BUCKET = process.env.CLOUD_BUCKET

const storage = new Storage({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: process.env.GOOGLE_CLOUD_KEYFILE
})
const bucket = storage.bucket(CLOUD_BUCKET)

const getPublicUrl = (filename) => {
  return `https://storage.googleapis.com/${CLOUD_BUCKET}/${filename}`
}

const sendUploadToGCS = (req, res, next) => {
  console.log(req.file);
  console.log(req.files);

  if (req.file) {
    var gcsname = 'uploads/images/' + Date.now() + req.file.originalname
    var file = bucket.file(gcsname)
  
    var stream = file.createWriteStream({
      metadata: {
        contentType: req.file.mimetype
      }
    })
  
    stream.on('error', (err) => {
      req.file.cloudStorageError = err
      next({ code: 400, message: err })
    })
  
    stream.on('finish', () => {
      req.file.cloudStorageObject = gcsname
      file.makePublic().then(() => {
        req.file.cloudStoragePublicUrl = getPublicUrl(gcsname)
        next()
      })
    })
  
    stream.end(req.file.buffer)
  }
  else if(req.files.length > 0) {
    let promises = []
  
    req.files.forEach((file,index) => {
      var gcsname = 'uploads/images/' + Date.now() + req.files[index].originalname
      var file = bucket.file(gcsname)
      var newPromise = new Promise((resolve, reject) => {
        var stream = file.createWriteStream({
          metadata: {
            contentType: req.files[index].mimetype
          }
        })
  
        stream.on('error', (err) => {
          req.files[index].cloudStorageError = err
          next({ code: 400, message: err })
        })
  
        stream.on('finish', () => {
          req.files[index].cloudStorageObject = gcsname
          file.makePublic().then(() => {
            req.files[index].cloudStoragePublicUrl = getPublicUrl(gcsname)
          })
        })
  
        stream.end(req.files[index].buffer)
      })

      promises.push(newPromise)
    })
  
    Promise.all(promises)
    .then((response) => {
      console.log(response);
      next()
    })
    .catch((err) => {
      next({ code: 400, message: err.message })
    });
  }
  else {
    return next()
  }
}

const Multer = require('multer'),
      multer = Multer({
        storage: Multer.MemoryStorage,
        limits: {
          fileSize: 5 * 1024 * 1024
        }
        // dest: '../images'
      })

module.exports = {
  getPublicUrl,
  sendUploadToGCS,
  multer
}