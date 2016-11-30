"use strict";
var WorkModel = (function () {
    function WorkModel(data) {
        this.id = data['id'];
        this.title = data['title'];
        this.thumbnailUrl = data['thumbnail_url'];
        this.isActive = data['is_active'];
    }
    WorkModel.prototype.toJson = function () {
        return {
            id: this.id,
            title: this.id,
            thumbnail_url: this.thumbnailUrl,
            is_active: this.isActive,
        };
    };
    WorkModel.prototype.toString = function () {
        return JSON.stringify(this.toJson());
    };
    return WorkModel;
}());
exports.WorkModel = WorkModel;
//# sourceMappingURL=work.model.js.map