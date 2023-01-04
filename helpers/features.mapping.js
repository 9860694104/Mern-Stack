module.exports = function (feature, data) {
    if (data.Title) {
        feature.Title = data.Title
    }
    if (data.thumbnailImage) {
        feature.thumbnailImage = data.thumbnailImage
    }
    if (data.galleryImages) {
        feature.galleryImages = data.galleryImages
    }
    if (data.createdBy) {
        feature.createdBy = data.createdBy;
    }
    if (data.modifiedBy) {
        feature.modifiedBy = data.modifiedBy
    }
    return feature;
}