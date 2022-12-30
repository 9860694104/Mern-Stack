const express = require("express");
const router = express.Router();
const authorization = require("./../../middlewares/authorization")
const roomController = require("./room.controller");

router.route("/")
    .post(roomController.createRoom)

router.route("/all")
    .get(authorization, roomController.getAllRooms)

router.route("/all-room-userid")
    .get(roomController.getRoomsbyUserId)

router.route("/:id")
    .get(authorization, roomController.getSingleRoom)
    .put(authorization, roomController.updateRoom)
    .delete(authorization, roomController.deleteRoom)








module.exports = router;