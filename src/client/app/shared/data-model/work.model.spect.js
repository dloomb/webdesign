"use strict";
var work_model_1 = require('./work.model');
function main() {
    describe('WorkModel Service', function () {
        var work = new work_model_1.WorkModel({
            id: 'wrk_abc123',
            title: 'Goron Head',
            is_active: true,
            thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/fire-dino.appspot.com/o/public%2Fgoron.png?alt=media&token=5c6384c8-04fa-4199-b1e7-7bc0033a1d91'
        });
        it('should return a Object when toJson is called', function () {
            expect(work.toJson()).toEqual(jasmine.any(Object));
        });
        it('should return a the correct values when toJson is called', function () {
            var o = work.toJson();
            expect(o.id).toEqual(work.id);
            expect(o.title).toEqual(work.id);
            expect(o.thumbnail_url).toEqual(work.thumbnailUrl);
            expect(o.is_active).toEqual(work.isActive);
        });
    });
}
exports.main = main;
//# sourceMappingURL=work.model.spect.js.map