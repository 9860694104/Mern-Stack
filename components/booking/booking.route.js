const express = require("express");
const router = express.Router();
const bookingController = require("./booking.controller");

router.route("/")
    .get(bookingController.createBooking)
    .post()


module.exports = router;