const multer  = require('multer')
const {Router} = require('express');
const router = new Router();

const storage = multer.diskStorage({
  destination: "./../public/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now()
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000000 },
}).single("img");

module.exports = upload;