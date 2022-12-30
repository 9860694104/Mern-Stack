const categoryQuery = require("./category.query")

function createCategory(req, res, next) {
    req.body.createdBy = req.loggedInUser;
    categoryQuery.insertCategory(req.body)
        .then(function (data) {
            res.status(200).json(data)
        })
        .catch(function (err) {
            next(err);
        })
}

function getAllCategories(req, res, next) {
    categoryQuery.findAllCategory()
        .then(function (data) {
            res.status(200).json(data)
        })
        .catch(function (err) {
            next(err);
        })
}

function getSingleCategory(req, res, next) {
    categoryQuery.findSingleCategory(req.params.id)
        .then(function (data) {
            res.status(200).json(data)
        })
        .catch(function (err) {
            next(err);
        })
}

module.exports = {
    createCategory,
    getAllCategories,
    getSingleCategory
}