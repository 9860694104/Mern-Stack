const BookingModel = require("./booking.model")
const mappingBooking = require("./../../helpers/booking.mapping")

function insertBooking(data) {
    return new Promise(function (resolve, reject) {
        const newBooking = new BookingModel({})
        const mappedBooking = mappingBooking(newBooking, data)
        mappedBooking.save(function (err, bookedRoom) {
            if (err) {
                return reject(err);
            }
            resolve(bookedRoom)
        })
    })
}

module.exports = {
    insertBooking
}