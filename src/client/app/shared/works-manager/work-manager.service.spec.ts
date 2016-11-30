import { ReflectiveInjector } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

import { WorksManagerService } from './work-manager.service';
import { WorkModel } from '../data-model/work.model';

export function main() {
	describe('WorksManager Service', () => {
		let featuredObservable: Observable<WorkModel[]>;
		let workManagerService: WorksManagerService;
		let work = new WorkModel({
			id: 'wrk_abc123',
			title: 'Goron Head',
			is_active: true,
			thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/fire-dino.appspot.com/o/public%2Fgoron.png?alt=media&token=5c6384c8-04fa-4199-b1e7-7bc0033a1d91'
		});

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
			featuredObservable = workManagerService.getFeatured();
		});

		it('should return an Observable when getFeatured called', () => {
			expect(featuredObservable).toEqual(jasmine.any(Observable));
		});

		it('should resolve to list of WorkModel when getFeatured called', () => {
			let works: any;
			featuredObservable.subscribe((data: any) => works = data);
			expect(works[0]).toEqual(work);
		});
	});
}
