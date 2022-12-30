module.exports = function (feature, data) {
    if (data.Title) {
        feature.Title = data.Title
    }
    if (data.Image) {
        feature.Image = data.Image
    }
    if (data.createdBy) {
        feature.createdBy = data.createdBy;
    }
    if (data.modifiedBy) {
        feature.modifiedBy = data.modifiedBy
    }
    return feature;
}