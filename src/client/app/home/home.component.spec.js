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
var testing_1 = require('@angular/core/testing');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var testing_2 = require('@angular/router/testing');
var testing_3 = require('@angular/core/testing');
var http_1 = require('@angular/http');
var testing_4 = require('@angular/http/testing');
var index_1 = require('../shared/index');
var home_module_1 = require('./home.module');
function main() {
    describe('Home component', function () {
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [forms_1.FormsModule, router_1.RouterModule, http_1.HttpModule, home_module_1.HomeModule, testing_2.RouterTestingModule],
                declarations: [TestComponent],
                providers: [
                    index_1.WorksManagerService,
                    http_1.BaseRequestOptions,
                    testing_4.MockBackend,
                    {
                        provide: http_1.Http, useFactory: function (backend, defaultOptions) {
                            return new http_1.Http(backend, defaultOptions);
                        },
                        deps: [testing_4.MockBackend, http_1.BaseRequestOptions]
                    }
                ]
            });
        });
        it('should work', testing_3.async(function () {
            testing_1.TestBed
                .compileComponents()
                .then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var homeInstance = fixture.debugElement.children[0].componentInstance;
                var homeDOMEl = fixture.debugElement.children[0].nativeElement;
                expect(homeInstance.worksManager).toEqual(jasmine.any(index_1.WorksManagerService));
                expect(homeDOMEl.querySelectorAll('li').length).toEqual(3);
            });
        }));
    });
}
exports.main = main;
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        core_1.Component({
            selector: 'test-cmp',
            template: '<sd-home></sd-home>'
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
//# sourceMappingURL=home.component.spec.js.map