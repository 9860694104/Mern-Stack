const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reviewSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    deliveredDate: Date,
    rating: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const reviewModel = mongoose.model("review", reviewSchema);
module.exports = reviewModel;

