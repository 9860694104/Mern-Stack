const express = require("express");
const router = express.Router();
const routerModel = require("./../models/reviewModels");

router.post("/review", function (req, res, next) {
    const pageReview = new routerModel({});
    pageReview.name = req.body.name;
    pageReview.productName = req.body.productName;
    pageReview.deliveredDate = req.body.deliveredDate;
    pageReview.rating = req.body.rating;
    pageReview.message = req.body.message;

    pageReview.save(function (err, success) {
        if (err) {
            return next(err);
        }
        res.status(200).json(success);
    })
})

module.exports = router;



