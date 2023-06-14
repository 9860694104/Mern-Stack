const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookingSchema = new Schema({
    fromDate: Date,
    toDate: Date,
    status: {
        type: String,
        enum: ['pending', 'accept', 'cancel'],
        default: "pending"
    },
    roomId: {
        type: Schema.Types.ObjectId,
        ref: "rooms"
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    modifiedBy: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
}, {
    timestamps: true
});

const bookingModel = mongoose.model("bookings", bookingSchema);
module.exports = bookingModel;
