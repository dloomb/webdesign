"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var index_1 = require('../shared/index');
var WorkComponent = (function () {
    function WorkComponent(route, worksManager) {
        this.route = route;
        this.worksManager = worksManager;
        this.newName = '';
    }
    WorkComponent.prototype.ngOnInit = function () {
        this.getWorkWithAllIncludedMembers();
    };
    WorkComponent.prototype.getWorkWithAllIncludedMembers = function () {
        var _this = this;
        this.route
            .params
            .flatMap(function (params) {
            return _this.worksManager.getWork(params['work_id']);
        }).subscribe(function (work) { return _this.work = work; }, function (error) { return _this.errorMessage = error; });
    };
    WorkComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fd-work',
            templateUrl: 'work.component.html',
            styleUrls: ['work.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, index_1.WorksManagerService])
    ], WorkComponent);
    return WorkComponent;
}());
exports.WorkComponent = WorkComponent;
//# sourceMappingURL=work.component.js.map