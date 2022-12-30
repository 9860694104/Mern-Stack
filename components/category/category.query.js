const CategoryModel = require("./category.model");
const mappingCategory = require("./../../helpers/category.mapping")

function insertCategory(data) {
    return new Promise(function (resolve, reject) {
        const newCategory = new CategoryModel({});
        const mappedCategory = mappingCategory(newCategory, data);
        mappedCategory.save(function (err, success) {
            if (err) {
                return reject(err);
            }
            resolve(success);
        })
    })
}

function findAllCategory() {
    return new Promise(function (resolve, reject) {
        CategoryModel.find({}).populate("createdBy").exec(function (err, categories) {
            if (err) {
                return reject(err);
            }
            resolve(categories);
        })
    })
}

function findSingleCategory(id) {
    return new Promise(function (resolve, reject) {
        CategoryModel.findById(id).populate("createdBy").exec(function (err, category) {
            if (err) {
                return reject(err);
            }
            if (!category) {
                return reject({ msg: "Category NOT FOUND !!!" })
            }
            resolve(category);
        })
    })
}

module.exports = {
    insertCategory,
    findAllCategory,
    findSingleCategory
}