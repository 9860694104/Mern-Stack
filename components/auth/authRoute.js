const express = require("express");
const router = express.Router();
const authController = require("./auth.controller")

router.route("/register")
    .post(authController.register)

router.route("/login")
    .post(authController.login)

router.route("/email-verification/:email_verification_token")
    .post(authController.emailVerfication)

module.exports = router;