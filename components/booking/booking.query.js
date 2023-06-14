const bookingModel = require("./booking.model")
const mappingBooking = require("./../../helpers/booking.mapping")
const bookingMapping = require("./../../helpers/booking.mapping")

function insertBooking(data) {
    return new Promise(function (resolve, reject) {
        const newBooking = new bookingModel({})
        const mappedBooking = mappingBooking(newBooking, data)
        mappedBooking.save(function (err, bookedRoom) {
            if (err) {
                return reject(err);
            }
            resolve(bookedRoom)
        })
    })
}

function getAllBookedRoom(condition) {
    return new Promise(function (resolve, reject) {
        bookingModel.find(condition).populate(['createdBy', 'roomId']).exec(function (err, bookedRooms) {
            if (err) {
                return reject(err);
            }
            resolve(bookedRooms)
        })
    })
}

function updateBookedRoom(id, data) {
    return new Promise(function (resolve, reject) {
        bookingModel.findById(id).exec(function (err, bookedRoom) {
            if (err) {
                return reject(err);
            }
            if (!bookedRoom) {
                return reject({ msg: "Booked Record not Found !!!" })
            }
            const updatedBookedRoomMapped = bookingMapping(bookedRoom, data)
            updatedBookedRoomMapped.save(function (err, updatebookedRoom) {
                if (err) {
                    return reject(err);
                }
                resolve(updatebookedRoom);
            })
        })
    })
}


module.exports = {
    insertBooking,
    getAllBookedRoom,
    updateBookedRoom
}