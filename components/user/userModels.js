const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    phone: Number,
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    birthDate: Date,
    role: {
        type: String,
        enum: ['super-admin', 'admin', 'visitor'],
        default: 'visitor'
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    emailVerficationToken: String,
    emailVerficationTokenExpire: Date,
    resetPasswordToken: String,
    resetPasswordTokenExpire: Date,
}, { timestamps: true });


const userModel = mongoose.model("users", userSchema);
module.exports = userModel;

