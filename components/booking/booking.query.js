const BookingModel = require("./booking.model")
const mappingBooking = require("./../../helpers/booking.mapping")

function insertBooking(data) {
    return new Promise(function (resolve, reject) {
        const newBooking = new BookingModel({})
        const mappedBooking = mappingBooking(newBooking, data)
        // console.log(newBooking);
        mappedBooking.save(function (err, success) {
            if (err) {
                return reject(err);
            }
            resolve(success)
        })
    })
}

module.exports = {
    insertBooking
}