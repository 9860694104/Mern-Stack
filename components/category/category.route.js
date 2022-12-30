const express = require("express");
const router = express.Router();
const categoryController = require("./category.controller")
const authorization = require("./../../middlewares/authorization")

router.route("/")
    .post(categoryController.createCategory)

router.route("/all")
    .get(authorization, categoryController.getAllCategories)

router.route("/:id")
    .get(authorization, categoryController.getSingleCategory)

module.exports = router;