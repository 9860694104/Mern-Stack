const express = require("express");
const router = express.Router();
const authController = require("./auth.controller")

router.route("/register")
    .post(authController.register)

router.route("/login")
    .post(authController.login)

router.route("/email-verification/:email_verification_token")
    .post(authController.emailVerfication)

router.route("/forgot-password")
    .post(authController.forgotPassword)

router.route("/reset-password/:reset_password_token")
    .post(authController.resetPassword)

module.exports = router;