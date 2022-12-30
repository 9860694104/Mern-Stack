const express = require("express");
const router = express.Router();
const featuresController = require("./features.controller");
const authorization = require("./../../middlewares/authorization")

router.route("/")
    .post(featuresController.createfeature)

router.route("/all")
    .get(authorization, featuresController.getAllfeatures)

router.route("/:id")
    .get(authorization, featuresController.getSinglefeature)
    .put(authorization, featuresController.updatedfeatures)
    .delete(authorization, featuresController.deletefeatures)

module.exports = router;