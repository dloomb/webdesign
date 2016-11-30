"use strict";
var WorkItemModel = (function () {
    function WorkItemModel(data) {
        this.id = data['id'];
        this.thumbnailUrl = data['thumbnail_url'];
        this.isActive = data['is_active'];
    }
    WorkItemModel.prototype.toJson = function () {
        return {
            id: this.id,
            title: this.id,
            thumbnail_url: this.thumbnailUrl,
            is_active: this.isActive,
        };
    };
    WorkItemModel.prototype.toString = function () {
        return JSON.stringify(this.toJson());
    };
    return WorkItemModel;
}());
exports.WorkItemModel = WorkItemModel;
//# sourceMappingURL=work-item.model.js.map