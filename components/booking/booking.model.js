const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookingSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: String,
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    numberOfRooms: Number,
    specialRequest: String,
    checkIn: {
        type: Date,
        required: true,
    },
    checkOut: Date,
    RoomType: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "categories"
    }

});

const bookingModel = mongoose.model("bookings", bookingSchema);
module.exports = bookingModel;
