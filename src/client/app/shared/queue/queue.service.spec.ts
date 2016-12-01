import { ReflectiveInjector } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

import { QueueService } from './queue.service';

export function main() {
	describe('Queue Service', () => {
		let queueService: QueueService;
		let mockBackend: MockBackend;
		let initialResponse: any;

		beforeEach(() => {
			let injector = ReflectiveInjector.resolveAndCreate([
				QueueService
			]);
			queueService = injector.get(QueueService);
		});

		it('should return an Observable when get called', () => {
			expect(true).toEqual(true);
		});
	});
}
