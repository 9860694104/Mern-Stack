const jwt = require("jsonwebtoken");
const userModel = require("./../components/user/userModels")
const config = require("./../config")

module.exports = function (req, res, next) {
    var token;
    if (req.headers["x-access-token"]) {
        token = req.headers["x-access-token"];
    }
    if (req.headers["authorization"]) {
        token = req.headers["authorization"];
    }
    if (req.headers["token"]) {
        token = req.headers["token"];
    }
    if (req.query["token"]) {
        token = req.query["token"];
    }
    if (token) {
        jwt.verify(token, config.app.jwtSecretkey, function (err, tokenverifiedUser) {
            if (err) {
                return next(err);
            }
            if (!tokenverifiedUser) {
                return next({ msg: "Invalid TOKEN " })
            }

            userModel.findById(tokenverifiedUser.id, function (err, finalVerifiedUser) {

                if (err) {
                    return next(err);
                }
                if (!finalVerifiedUser) {
                    return next({ msg: "USER NOT FOUND || ACCESS DENIED" });
                }
                req.loggedInUser = finalVerifiedUser.id;
                next();
            });
        });
    } else {
        next({ msg: "TOKEN NOT PROVIDED !!!" })
    }
}