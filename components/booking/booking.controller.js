const bookingQuery = require("./booking.query");
const roomQuery = require("./../rooms/room.query")


function createBooking(req, res, next) {
    req.body.roomId = req.params.room_id;
    req.body.createdBy = req.loggedInUser;

    bookingQuery.insertBooking(req.body)
        .then(function (data) {
            console.log("Data Done", data)
            return roomQuery.updateRoom(req.params.room_id, { isBook: true })
        })
        .then(function (data) {
            res.status(200).json(data)
        })
        .catch(function (err) {
            return next(err)
        })
}

function getAllBookedRoom(req, res, next) {
    var condition = {}
    bookingQuery.getAllBookedRoom(condition)
        .then(function (data) {
            res.status(200).json(data)
        })
        .catch(function (err) {
            return next(err)
        })
}

function updateBookedRoom(req, res, next) {
    req.body.createdBy = req.loggedInUser;
    bookingQuery.updateBookedRoom(req.params.id, req.body)
        .then(function (data) {
            res.status(200).json(data)
        })
        .catch(function (err) {
            return next(err)
        })
}

module.exports = {
    createBooking,
    getAllBookedRoom,
    updateBookedRoom
}