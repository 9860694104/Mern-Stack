const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const roomSchema = new Schema({
    roomNumber: Number,
    roomTitle: {
        type: String,
        required: true,
    },
    shortDescription: String,
    category: String,
    features: [String],
    isBook: {
        type: Boolean,
        default: false
    },
    thumbnailImages: String,
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

const roomModel = mongoose.model("rooms", roomSchema);
module.exports = roomModel;

