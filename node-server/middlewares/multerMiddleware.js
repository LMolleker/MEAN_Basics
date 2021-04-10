const multer = require("multer");
var path = require("path");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../", "public/images"));
  },
  filename: function (req, file, cb) {
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
    return arr[1];
}
module.exports = upload;