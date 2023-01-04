const categoryQuery = require("./category.query")

function createCategory(req, res, next) {

    if (req.fileError) {
        return next({ msg: "Invalid Format" })
    }

    if (req.file) {
        req.body.Image = req.file.filename
    }

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
    categoryQuery.findsingleCategory(req.params.id)
        .then(function (data) {
            res.status(200).json(data)
        })
        .catch(function (err) {
            next(err);
        })
}

function updateCaegory(req, res, next) {
    req.body.modifiedBy = req.loggedInUser;
    categoryQuery.updateCaegory(req.params.id, req.body)
        .then(function (data) {
            res.status(200).json(data)
        })
        .catch(function (err) {
            next(err);
        })
}

function deleteCategory(req, res, next) {
    categoryQuery.removeCategory(req.params.id)
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
    getSingleCategory,
    updateCaegory,
    deleteCategory
}