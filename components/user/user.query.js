const UserModel = require("./userModels"); //UserModel is class
const userMapping = require("./../../helpers/userMapping");

function getUsers(condition) {
    return new Promise(function (resolve, reject) {
        UserModel.find(condition).exec(function (err, datas) {
            if (err) {
                reject(err)
            }
            resolve(datas)
        })
    })
}

function getUserbyId(id) {
    return new Promise(function (resolve, reject) {
        UserModel.findById({ _id: id }, function (err, users) { //findById(id, function (err, users)
            if (err) {
                reject(err);
            }
            resolve(users);
        })
    })
}

function updateById(id, data) {
    return new Promise(function (resolve, reject) {
        UserModel.findById(id, function (err, user) {
            if (err) {
                return reject(err);
            }
            if (!user) {
                return resolve({ msg: "Users Not Found !!!!" })
            }
            const updatedUserMapped = userMapping(user, data); //yo helper ma janxa
            updatedUserMapped.save(function (err, updatedUser) {
                if (err) {
                    reject(err);
                }
                resolve(updatedUser)
            })
        })
    })
}

function deletebyId(id) {
    return new Promise(function (resolve, reject) {
        UserModel.findById(id, function (err, user) {
            if (err) {
                return reject(err)
            }
            if (!user) {
                return resolve({ msg: "Users Not Found !!!!" })
            }
            user.remove(function (err, deleteUser) {
                if (err) {
                    return reject(err)
                }
                return resolve(deleteUser);
            })

        })
    })
}



module.exports = {
    getUsers,
    getUserbyId,
    updateById,
    deletebyId
}