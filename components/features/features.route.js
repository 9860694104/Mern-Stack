const express = require("express");
const router = express.Router();
const multer = require("multer");

const featuresController = require("./features.controller");
const authorization = require("./../../middlewares/authorization")

const myStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

function myFileFilter(req, file, cb) {
    var mimeType = file.mimetype.split("/")[0];
    if (mimeType == "image") {
        cb(null, true)
    } else {
        req.fileError = true;
        cb(null, false)
    }
}

const upload = multer({
    storage: myStorage,
    fileFilter: myFileFilter
})

router.route("/")
    .post(upload.single("Image"), featuresController.createfeature)

router.route("/all")
    .get(authorization, featuresController.getAllfeatures)

router.route("/:id")
    .get(authorization, featuresController.getSinglefeature)
    .put(authorization, featuresController.updatedfeatures)
    .delete(authorization, featuresController.deletefeatures)

module.exports = router;