const UserModel = require("./../components/user/userModels")

module.exports = function (req, res, next) {
    UserModel.findById(req.loggedInUser, function (err, user) {
        if (err) {
            return next(err);
        }
        if (user.role == "super-admin" || user.role == "admin") {
            next();
        } else {
            next({ msg: "Access Denied !!!" })
        }
    })
}

