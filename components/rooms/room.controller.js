const roomQuery = require("./room.query");

function createRoom(req, res, next) {
    req.body.createdBy = req.loggedInUser;
    roomQuery.insertRoom(req.body)
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (err) {
            next(err);
        })
}

function getAllRooms(req, res, next) {
    roomQuery.findAllRooms()
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (err) {
            next(err);
        })
}

function getSingleRoom(req, res, next) {
    roomQuery.findsingleRoom(req.params.id)
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (err) {
            next(err);
        })
}

function updateRoom(req, res, next) {
    req.body.modifiedBy = req.loggedInUser;
    roomQuery.updateRoom(req.params.id, req.body)
        .then(function (data) {
            res.status(200).json(data)
        })
        .catch(function (err) {
            next(err);
        })
}

function deleteRoom(req, res, next) {
    roomQuery.deleteRoom(req.params.id)
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (err) {
            next(err);
        })
}

function getRoomsbyUserId(req, res, next) {
    roomQuery.findRoomsbyUserId(req.loggedInUser)
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (err) {
            next(err);
        })
}

module.exports = {
    createRoom,
    getAllRooms,
    getSingleRoom,
    updateRoom,
    deleteRoom,
    getRoomsbyUserId
}