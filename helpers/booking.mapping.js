module.exports = function (booking, data) {
    if (data.fromDate)
        booking.fromDate = data.fromDate;
    if (data.toDate)
        booking.toDate = data.toDate;
    if (data.status)
        booking.status = data.status;
    if (data.roomId)
        booking.roomId = data.roomId;
    if (data.createdBy)
        booking.createdBy = data.createdBy;
    if (data.modifiedBy)
        booking.modifiedBy = data.modifiedBy;
    return booking;
}