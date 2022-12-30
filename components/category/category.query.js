const CategoryModel = require("./category.model");
const mappingCategory = require("./../../helpers/category.mapping")

function insertCategory(data) {
    return new Promise(function (resolve, reject) {
        const newfeature = new CategoryModel({});
        const mappedCategory = mappingCategory(newfeature, data);
        mappedCategory.save(function (err, success) {
            if (err) {
                return reject(err);
            }
            resolve(success)
        })
    })
}

function findAllCategory() {
    return new Promise(function (resolve, reject) {
        CategoryModel.find({}).populate("createdBy").exec(function (err, categories) {
            if (err) {
                return reject(err);
            }
            if (!categories) {
                return reject({ msg: "Categories NOT FOUND !!!" })
            }
            resolve(categories)
        })
    })
}

function findsingleCategory(id) {
    return new Promise(function (resolve, reject) {
        CategoryModel.findById(id).populate("createdBy").exec(function (err, category) {
            if (err) {
                return reject(err);
            }
            if (!category) {
                return reject({ msg: "Category NOT FOUND !!!" })
            }
            resolve(category)
        })
    })
}

function updateCaegory(id, data) {
    return new Promise(function (resolve, reject) {
        CategoryModel.findById(id, function (err, mycategory) {
            if (err) {
                return reject(err);
            }
            if (!mycategory) {
                return reject({ msg: "Category NOT FOUND !!!" })
            }

            const updatedMappedCategory = mappingCategory(mycategory, data)
            updatedMappedCategory.save(function (err, updatedCaegory) {
                if (err) {
                    return reject(err);
                }
                resolve(updatedCaegory);
            })
        })

    })
}

function removeCategory(id) {
    return new Promise(function (resolve, reject) {
        CategoryModel.findById(id, function (err, mycategory) {
            if (err) {
                return reject(err);
            }
            if (!mycategory) {
                return reject({ msg: "Category NOT FOUND !!!" })
            }
            mycategory.remove(function (err, deletedCategory) {
                if (err) {
                    return reject(err);
                }
                resolve(deletedCategory);
            })
        })
    })
}

module.exports = {
    insertCategory,
    findAllCategory,
    findsingleCategory,
    updateCaegory,
    removeCategory
}