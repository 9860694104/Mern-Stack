const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const featuresSchema = new Schema({
    Title: {
        type: String,
        index: true,
        unique: true,
        required: true
    },
    thumbnailImage: String,
    galleryImages: [String],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    modifiedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
},
    {
        timestamps: true
    });

const featuresModel = mongoose.model("features", featuresSchema);
module.exports = featuresModel;
