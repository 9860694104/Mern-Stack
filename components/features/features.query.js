const FeaturesModel = require("./features.model");
const featuresMapping = require("./../../helpers/features.mapping");

function insertfeature(data) {
    return new Promise(function (resolve, reject) {
        const newfeatures = new FeaturesModel({});
        const featuresMapped = featuresMapping(newfeatures, data)
        featuresMapped.save(function (err, success) {
            if (err) {
                return reject(err)
            }
            resolve(success);
        })
    })
}

function findAllfeatures() {
    return new Promise(function (resolve, reject) {
        FeaturesModel.find({}).populate("createdBy").exec(function (err, features) {
            if (err) {
                return reject(err);
            }
            if (!features) {
                return reject({ msg: "Features not Added Yet !!!" })
            }
            resolve(features);
        })
    })
}

function findSinglefeature(id) {
    return new Promise(function (resolve, reject) {
        FeaturesModel.findById(id).populate("createdBy").exec(function (err, feature) {
            if (err) {
                return reject(err);
            }
            if (!feature) {
                return reject({ msg: "Features not Added Yet !!!" })
            }
            resolve(feature);
        })

    })
}

function updatedfeatures(id, data) {
    return new Promise(function (resolve, reject) {
        FeaturesModel.findById(id, function (err, myfeatures) {
            if (err) {
                return reject(err);
            }
            if (!myfeatures) {
                return reject({ msg: "Features not FOUND !!!" })
            }

            const updatedMappedfeatures = featuresMapping(myfeatures, data)
            updatedMappedfeatures.save(function (err, updatedfeatures) {
                if (err) {
                    return reject(err);
                }
                resolve(updatedfeatures)
            })
        })
    })
}

function removefeatures(id) {
    return new Promise(function (resolve, reject) {
        FeaturesModel.findById(id, function (err, myfeatures) {
            if (err) {
                return reject(err);
            }
            if (!myfeatures) {
                return reject({ msg: "Features not FOUND !!!" })
            }
            myfeatures.remove(function (err, deletedfeatures) {
                if (err) {
                    return reject(err);
                }
                resolve(deletedfeatures);
            })
        })
    })
}

module.exports = {
    insertfeature,
    findAllfeatures,
    findSinglefeature,
    updatedfeatures,
    removefeatures
}


