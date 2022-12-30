const passwordHash = require("password-hash");
const UserModel = require("./../user/userModels");
const userMapping = require("./../../helpers/userMapping");

function signUp(data) {
    return new Promise(function (resolve, reject) {
        data.password = passwordHash.generate(data.password);
        const newUser = new UserModel({});
        const mappednewUser = userMapping(newUser, data);
        mappednewUser.save(function (err, success) {
            if (err) {
                return reject(err);
            }
            resolve(success)
        });
    });
}

function signIn(username) {
    return new Promise(function (resolve, reject) {
        UserModel.findOne({ username }, function (err, user) {
            if (err) {
                return reject(err);
            }
            if (!user) {
                return reject({ msg: "User Not Found !!!" })
            }
            resolve(user);
        })
    })
}

module.exports = {
    signUp,
    signIn
}