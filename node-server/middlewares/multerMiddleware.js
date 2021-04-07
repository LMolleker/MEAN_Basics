const multer = require("multer");


var path = require("path");


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../", "public/images"));
    console.log("paso por destination")
  },
  filename: function (req, file, cb) {
    console.log("paso por filename")
    cb(
      null,
      file.fieldname + "-" + Date.now() + "." + getExtension(file.mimetype)
      );
  }
});

const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024
  },
  dest: path.join(__dirname, "../", "public"),
  storage: storage
});

function getExtension(mimetype){
    let arr = mimetype.split("/");
    console.log("extension: " + arr[1]);
    return arr[1];
}

module.exports = upload;