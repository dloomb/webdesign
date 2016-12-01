import { ReflectiveInjector } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

import { WorkItemModel } from './work-item.model';

export function main() {
	describe('WorkItemModel Service', () => {
		let item = new WorkItemModel({
			"id": "wki_abc123",
			"thumbnail_url": "https://firebasestorage.googleapis.com/v0/b/fire-dino.appspot.com/o/public%2Fleaf.png?alt=media&token=00b9c14d-1de2-49ab-9b0a-e00c6b803cd8",
			"is_active": true,
			"work_id": "wrk_abc123",
			"product_id": "prd_abc123"
		});


		it('should return a Object when toJson is called', () => {
			expect(item.toJson()).toEqual(jasmine.any(Object));
		});

		it('should return a the correct values when toJson is called', () => {
			const o = <any> item.toJson();
			expect(o.id).toEqual(item.id);
			expect(o.title).toEqual(item.id);
			expect(o.thumbnail_url).toEqual(item.thumbnailUrl);
			expect(o.is_active).toEqual(item.isActive);
		});
	});
}
