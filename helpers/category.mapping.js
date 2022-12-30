module.exports = function (category, data) {
    if (data.Title) {
        category.Title = data.Title;
    }
    if (data.Image) {
        category.Image = data.Image;
    }
    if (data.createdBy) {
        category.createdBy = data.createdBy;
    }
    if (data.modifiedBy) {
        category.modifiedBy = data.modifiedBy
    }
    return category;
}