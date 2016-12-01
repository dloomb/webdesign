import { ReflectiveInjector } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

import { WorkModel } from './work.model';

export function main() {
	describe('WorkModel Service', () => {
		let work = new WorkModel({
			id: 'wrk_abc123',
			title: 'Goron Head',
			is_active: true,
			thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/fire-dino.appspot.com/o/public%2Fgoron.png?alt=media&token=5c6384c8-04fa-4199-b1e7-7bc0033a1d91'
		});


		it('should return a Object when toJson is called', () => {
			expect(work.toJson()).toEqual(jasmine.any(Object));
		});

		it('should return a the correct values when toJson is called', () => {
			const o = <any> work.toJson();
			expect(o.id).toEqual(work.id);
			expect(o.title).toEqual(work.id);
			expect(o.thumbnail_url).toEqual(work.thumbnailUrl);
			expect(o.is_active).toEqual(work.isActive);
		});
	});
}
