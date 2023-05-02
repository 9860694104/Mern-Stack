module.exports = function (booking, data) {
    if (data.firstName) {
        booking.firstName = data.firstName
    }
    if (data.middleName) {
        booking.middleName = data.middleName
    }
    if (data.firstName) {
        booking.firstName = data.firstName
    }
    if (data.lastName) {
        booking.lastName = data.lastName
    }
    if (data.email) {
        booking.email = data.email
    }
    if (data.phoneNumber) {
        booking.phoneNumber = data.phoneNumber
    }
    if (data.numberOfRooms) {
        booking.numberOfRooms = data.numberOfRooms
    }
    if (data.specialRequest) {
        booking.specialRequest = data.specialRequest
    }
    if (data.checkIn) {
        booking.checkIn = data.checkIn
    }
    if (data.checkOut) {
        booking.checkOut = data.checkOut
    }
    if (data.RoomType) {
        booking.RoomType = data.RoomType
    }

    return booking;
}