const express = require("express");
const router = express.Router();
const bookingController = require("./booking.controller");
const authorization = require("./../../middlewares/authorization")




router.route("/all")
    .get(authorization, bookingController.getAllBookedRoom)

router.route("/single/:id")
    .put(authorization, bookingController.updateBookedRoom)
    .delete(authorization)

router.route("/:room_id")
    .post(bookingController.createBooking)

module.exports = router;