const express = require("express");
const router = express.Router();

const userController = require("./userController")

router.route("/all")
    .get(userController.getAllUsers);

router.route("/:id")
    .get(userController.getSingleUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

module.exports = router;