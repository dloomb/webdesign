import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
	async
} from '@angular/core/testing';
import {
	BaseRequestOptions,
	ConnectionBackend,
	Http, HttpModule
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { WorksManagerService } from '../shared/index';
import { WorkModule } from './work.module';

export function main() {
	describe('Work component', () => {
		// setting module for testing
		// Disable old forms
		beforeEach(() => {
			TestBed.configureTestingModule({
				imports: [FormsModule, RouterModule, HttpModule, WorkModule,  RouterTestingModule],
				declarations: [TestComponent],
				providers: [
					WorksManagerService,
					BaseRequestOptions,
					MockBackend,
					{
						provide: Http, useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
							return new Http(backend, defaultOptions);
						},
						deps: [MockBackend, BaseRequestOptions]
					}
				]
			});
		});

		it('should work',
			async(() => {
				TestBed
					.compileComponents()
					.then(() => {
						let fixture = TestBed.createComponent(TestComponent);
						fixture.detectChanges();

						let homeInstance = fixture.debugElement.children[0].componentInstance;
						let homeDOMEl = fixture.debugElement.children[0].nativeElement;

						expect(homeInstance.worksManager).toEqual(jasmine.any(WorksManagerService));
					});

			}));
	});
}

@Component({
	selector: 'test-cmp',
	template: '<fd-work></fd-work>'
})
class TestComponent { }
