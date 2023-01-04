const RoomModel = require("./room.models");
const roomMapping = require("./../../helpers/room.mapping");

function insertRoom(data) {
    // console.log(data)
    return new Promise(function (resolve, reject) {
        const newRoom = new RoomModel({});
        const ourRoomMapped = roomMapping(newRoom, data)
        ourRoomMapped.save(function (err, success) {
            if (err) {
                return reject(err)
            }
            return resolve(success)
        })
    })
}

function findAllRooms() {
    return new Promise(function (resolve, reject) {
        RoomModel.find({}).populate('createdBy').exec(function (err, rooms) {
            if (err) {
                return reject(err);
            }
            if (!rooms) {
                return resolve({ msg: "Cannot Find Rooms , Rooms are not Available !!! " })
            }
            if (rooms) {
                resolve(rooms)
            }
        })
    })
}

function findsingleRoom(id) {
    return new Promise(function (resolve, reject) {
        RoomModel.findById(id).populate('createdBy').exec(function (err, room) {
            if (err) {
                return reject(err);
            }
            if (!room) {
                return reject({ msg: "Rooms not Available" })
            }
            return resolve(room);
        })

    })
}


function updateRoom(id, data) {
    return new Promise(function (resolve, reject) {
        RoomModel.findById(id, function (err, myroom) {
            if (err) {
                return reject(err)
            }
            if (!myroom) {
                return resolve({ msg: "Rooms Not Available" })
            }
            const updatedRoomsMapped = roomMapping(myroom, data);
            updatedRoomsMapped.save(function (err, updatedroom) {
                if (err) {
                    return reject(err)
                }
                return resolve(updatedroom)
            })
        })
    })
}

function deleteRoom(id) {
    return new Promise(function (resolve, reject) {
        RoomModel.findById(id, function (err, myroom) {
            if (err) {
                return reject(err);
            }
            if (!myroom) {
                return resolve({ msg: "Rooms NOT FOUND !!!" })
            }
            myroom.remove(function (err, deletedRoom) {
                if (err) {
                    return reject(err);
                }
                return resolve(deletedRoom)
            })
        })
    })
}

function findRoomsbyUserId(id) {
    return new Promise(function (resolve, reject) {
        RoomModel.find({ createdBy: id }).populate('createdBy').exec(function (err, rooms) {
            if (err) {
                return reject(err)
            }
            if (rooms.length == 0) {
                return reject({ msg: "Rooms not Available" })
            }
            resolve(rooms);
        });
    });
};

module.exports = {
    insertRoom,
    findAllRooms,
    findsingleRoom,
    updateRoom,
    deleteRoom,
    findRoomsbyUserId
}