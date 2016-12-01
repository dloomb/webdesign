import { Component, OnInit } from '@angular/core';
import { QueueService, ProductSyncTask } from '../shared/index';


/**
 * This class represents the lazy loaded AdminComponent.
 */
@Component({
	moduleId: module.id,
	selector: 'fd-admin',
	templateUrl: 'admin.component.html',
	styleUrls: ['admin.component.css'],
})
export class AdminComponent implements OnInit {

	/**
	 * Creates an instance of the AdminComponent with the injected
	 * NameListService.
	 */
	constructor(public queue: QueueService) { }

	/**
	 * Get the names OnInit
	 */
	ngOnInit() {
		console.log();
	}

	onFireProductSyncJobClicked() {
		const task = new ProductSyncTask();
		this.queue.enqueue(task);
	}
}
