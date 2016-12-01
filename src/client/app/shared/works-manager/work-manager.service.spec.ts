import { ReflectiveInjector } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

import { WorksManagerService } from './work-manager.service';
import { WorkModel } from '../data-model/work.model';

const data = {
	"featured": ["wrk_abc123"],
	"works": {
		"wrk_abc123": {
			"id": "wrk_abc123",
			"title": "Goron Head",
			"is_active": true,
			"thumbnail_url": "https://firebasestorage.googleapis.com/v0/b/fire-dino.appspot.com/o/public%2Fgoron.png?alt=media&token=5c6384c8-04fa-4199-b1e7-7bc0033a1d91",
			"work_item_ids": [
				"wki_abc124"
			]
		}
	},
	"work_items": {
		"wki_abc124": {
			"id": "wki_abc124",
			"thumbnail_url": "https://firebasestorage.googleapis.com/v0/b/fire-dino.appspot.com/o/public%2Fleaf.png?alt=media&token=00b9c14d-1de2-49ab-9b0a-e00c6b803cd8",
			"is_active": true,
			"work_id": "wrk_abc123",
			"product_id": "prd_abc124"
		}
	}
};

export function main() {
	describe('WorksManager Service', () => {
		let featuredObservable: Observable<WorkModel[]>;
		let workObservable: Observable<WorkModel>;
		let mockBackend: MockBackend;
		let workManagerService: WorksManagerService;
		let work = new WorkModel(data['works']['wrk_abc123']);

		beforeEach(() => {
			let injector = ReflectiveInjector.resolveAndCreate([
				WorksManagerService,
				BaseRequestOptions,
				MockBackend,
				{
					provide: Http,
					useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
						return new Http(backend, defaultOptions);
					},
					deps: [MockBackend, BaseRequestOptions]
				},
			]);

			workManagerService = injector.get(WorksManagerService);
			mockBackend = injector.get(MockBackend);

			let connection: any;
			mockBackend.connections.subscribe((c: any) => connection = c);
			featuredObservable = workManagerService.getFeatured();

			connection.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(data) })));

			workObservable = workManagerService.getWork('wrk_abc123');
			connection.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(data) })));
		});

		it('should return an Observable when getFeatured is called', () => {
			expect(featuredObservable).toEqual(jasmine.any(Observable));
		});

		it('should resolve to list of WorkModel when getFeatured is called', () => {
			let works: any;
			featuredObservable.subscribe((data: any) => works = data);
			expect(works[0]).toEqual(jasmine.any(WorkModel));
		});

		it('should resolve to a fully loaded WorkModel when getWork is called', () => {
			let w: any;
			workObservable.subscribe((data: any) => w = data);
			expect(w).toEqual(jasmine.any(WorkModel));
		});

		it('should fail when getWork is given bad data', () => {
			let connection: any;
			mockBackend.connections.subscribe((c: any) => connection = c);
			let fail = workManagerService.getWork('abc');
			connection.mockRespond(new Response(new ResponseOptions({ body: ''})));

			let error: any;
			fail.subscribe((data: any) => {}, (e: any) => {
				error = e;
			});
			expect(error).toBeDefined();
		});		
	});
}
