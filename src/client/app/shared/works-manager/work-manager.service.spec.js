"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var testing_1 = require('@angular/http/testing');
var Observable_1 = require('rxjs/Observable');
var work_manager_service_1 = require('./work-manager.service');
var work_model_1 = require('../data-model/work.model');
function main() {
    describe('WorksManager Service', function () {
        var featuredObservable;
        var workManagerService;
        var work = new work_model_1.WorkModel({
            id: 'wrk_abc123',
            title: 'Goron Head',
            is_active: true,
            thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/fire-dino.appspot.com/o/public%2Fgoron.png?alt=media&token=5c6384c8-04fa-4199-b1e7-7bc0033a1d91'
        });
        beforeEach(function () {
            var injector = core_1.ReflectiveInjector.resolveAndCreate([
                work_manager_service_1.WorksManagerService,
                http_1.BaseRequestOptions,
                testing_1.MockBackend,
                {
                    provide: http_1.Http,
                    useFactory: function (backend, defaultOptions) {
                        return new http_1.Http(backend, defaultOptions);
                    },
                    deps: [testing_1.MockBackend, http_1.BaseRequestOptions]
                },
            ]);
            workManagerService = injector.get(work_manager_service_1.WorksManagerService);
            featuredObservable = workManagerService.getFeatured();
        });
        it('should return an Observable when getFeatured called', function () {
            expect(featuredObservable).toEqual(jasmine.any(Observable_1.Observable));
        });
        it('should resolve to list of WorkModel when getFeatured called', function () {
            var works;
            featuredObservable.subscribe(function (data) { return works = data; });
            expect(works[0]).toEqual(work);
        });
    });
}
exports.main = main;
//# sourceMappingURL=work-manager.service.spec.js.map