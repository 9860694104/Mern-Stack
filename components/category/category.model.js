const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    Title: {
        type: String,
        unique: true,
        required: true
    },
    Image: String,
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

const categoryModel = mongoose.model("categories", categorySchema)
module.exports = categoryModel;