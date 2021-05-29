const fs = require('fs')

const deleteFile = (deleteFile) => {
    fs.unlink(deleteFile.substring(1), err => {
        if (err) {
            throw err;
        }
    })
}

exports.deleteFile = deleteFile;