const userQuery = require("./user.query") //userQuery =object

function getAllUsers(req, res, next) {
    var condition = {}
    userQuery.getUsers(condition) //yesle promise return gareko xa so 
        .then(function (datas) {
            res.json(datas)
        })
        .catch(function (err) {
            next(err)
        })
}

function getSingleUser(req, res, next) {
    userQuery.getUserbyId(req.params.id)
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            next(err);
        })
}

function updateUser(req, res, next) {
    userQuery.updateById(req.params.id, req.body)
        .then(function (data) {
            res.status(200).json(data)
        })
        .catch(function (err) {
            next(err);
        })
}


function deleteUser(req, res, next) {
    userQuery.deletebyId(req.params.id)
        .then(function (data) {
            res.status(200).json(data)
        })
        .catch(function (err) {
            next(err);
        })
}



module.exports = {
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
}