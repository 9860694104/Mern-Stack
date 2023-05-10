const bookingQuery = require("./booking.query");

function createBooking(req, res, next) {
    bookingQuery.createBooking(req.body)
        .then(function (data) {
            res.status(200).json(data)
        })
        .catch(function (err) {
            return next(err)
        })
}


module.exports = {
    createBooking
}