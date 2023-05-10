const passwordHash = require("password-hash");
const jwt = require("jsonwebtoken");
const authQuery = require("./auth.query");
const config = require("./../../config")


function register(req, res, next) {
    console.log("req.body", req.body);
    authQuery.signUp(req.body)
        .then(function (data) {
            res.status(200).json(data)
            console.log("new User", data);
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

function emailVerfication(req, res, next) {
    authQuery.emailVerfication(req.params.email_verification_token)
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (err) {
            next(err);
        })
}

function forgotPassword(req, res, next) {
    authQuery.forgetPassword(req.body.email)
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (err) {
            next(err);
        })
}

function resetPassword(req, res, next) {
    authQuery.resetPassword(req.body, req.params.reset_password_token)
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (err) {
            next(err);
        })
}

module.exports = {
    register,
    login,
    emailVerfication,
    forgotPassword,
    resetPassword

}
