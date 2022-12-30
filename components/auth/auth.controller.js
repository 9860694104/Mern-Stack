const passwordHash = require("password-hash");
const jwt = require("jsonwebtoken");
const authQuery = require("./auth.query");
const config = require("./../../config")


function register(req, res, next) {
    authQuery.signUp(req.body)
        .then(function (data) {
            res.status(200).json(data)
        })
        .catch(function (err) {
            next(err);
        })
}

function login(req, res, next) {
    authQuery.signIn(req.body.username)
        .then(function (user) {
            const isPasswordMatch = passwordHash.verify(req.body.password, user.password);
            if (!isPasswordMatch) {
                return next({ msg: "Password Didnot Matched !!!" })
            }
            const token = jwt.sign({ id: user._id }, config.app.jwtSecretkey);
            res.status(200).json({ user, token });
        })

        .catch(function (err) {
            next(err);
        })
}

module.exports = {
    register,
    login

}
