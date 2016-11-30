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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var work_model_1 = require('../data-model/work.model');
var data = {
    featured: [
        new work_model_1.WorkModel({
            id: 'wrk_abc123',
            title: 'Goron Head',
            is_active: true,
            thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/fire-dino.appspot.com/o/public%2Fgoron.png?alt=media&token=5c6384c8-04fa-4199-b1e7-7bc0033a1d91'
        }),
        new work_model_1.WorkModel({
            id: 'wrk_abc124',
            title: 'Leaf from Pokemon',
            is_active: true,
            thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/fire-dino.appspot.com/o/public%2Fleaf.png?alt=media&token=00b9c14d-1de2-49ab-9b0a-e00c6b803cd8'
        }),
        new work_model_1.WorkModel({
            id: 'wrk_abc125',
            title: 'Metroid Hatchling',
            is_active: true,
            thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/fire-dino.appspot.com/o/public%2Fmetroid.png?alt=media&token=c19e77b9-3223-42e6-a57c-34187f236fba'
        })
    ]
};
var WorksManagerService = (function () {
    function WorksManagerService(http) {
        this.http = http;
    }
    WorksManagerService.prototype.getFeatured = function () {
        return this.http.get('/assets/fd-data.json')
            .map(function (res) {
            return [];
        })
            .catch(this.handleError);
    };
    WorksManagerService.prototype.getWork = function (id) {
        return Rx_1.Observable.of(data['featured'][0])
            .catch(this.handleError);
    };
    WorksManagerService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    WorksManagerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WorksManagerService);
    return WorksManagerService;
}());
exports.WorksManagerService = WorksManagerService;
//# sourceMappingURL=work-manager.service.js.map