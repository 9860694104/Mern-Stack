const express = require("express");
const router = express.Router();
const multer = require("multer");

const authorization = require("./../../middlewares/authorization")
const roomController = require("./room.controller");

const myStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images/");
    },
    filename: function (req, file, cb) {
        cb(null, new Date().getTime() + "-" + file.originalname);
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
}).fields([
    { name: "thumbnailImage" },
    { name: "coverImage" },
    { name: "galleryImages" }
]);


router.route("/")
    .post(upload, roomController.createRoom)

router.route("/all")
    .get(authorization, roomController.getAllRooms)

router.route("/all-room-userid")
    .get(roomController.getRoomsbyUserId)

router.route("/:id")
    .get(authorization, roomController.getSingleRoom)
    .put(authorization, roomController.updateRoom)
    .delete(authorization, roomController.deleteRoom)


module.exports = router;