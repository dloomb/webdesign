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
var common_1 = require('@angular/common');
var work_component_1 = require('./work.component');
var work_routing_module_1 = require('./work-routing.module');
var shared_module_1 = require('../shared/shared.module');
var index_1 = require('../shared/name-list/index');
var WorkModule = (function () {
    function WorkModule() {
    }
    WorkModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, work_routing_module_1.WorkRoutingModule, shared_module_1.SharedModule],
            declarations: [work_component_1.WorkComponent],
            exports: [work_component_1.WorkComponent],
            providers: [index_1.NameListService]
        }), 
        __metadata('design:paramtypes', [])
    ], WorkModule);
    return WorkModule;
}());
exports.WorkModule = WorkModule;
//# sourceMappingURL=work.module.js.map