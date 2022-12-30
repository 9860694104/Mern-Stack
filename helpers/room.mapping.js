module.exports = function (room, data) {
    if (data.roomNumber) {
        room.roomNumber = data.roomNumber;
    }
    if (data.roomTitle) {
        room.roomTitle = data.roomTitle;
    }
    if (data.shortDescription) {
        room.shortDescription = data.shortDescription;
    }

    if (data.category) {
        room.category = data.category;
    }
    if (data.features) {
        if (room.features.length == 0) {
            room.features = data.features.split(',');
        } else {
            room.features = room.features.concat(data.features.split(',')) //yeti le matra ni kaam garxa
        }
    }
    if (data.isBook) {
        room.isBook = data.isBook;
    }
    if (data.createdBy) {
        room.createdBy = data.createdBy;
    }
    if (data.modifiedBy) {
        room.modifiedBy = data.modifiedBy;
    }

    return room;

}