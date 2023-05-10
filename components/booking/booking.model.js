const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookingSchema = new Schema({
    fromDate: Date,
    toDate: Date,
    roomId: {
        type: Schema.Types.ObjectId,
        ref: "room"
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    modifiedBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
}, {
    timestamps: true
});

const bookingModel = mongoose.model("bookings", bookingSchema);
module.exports = bookingModel;
