import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { BaseTask } from './base.task';

/**
* This class provides the QueueService service with methods to read names and add names.
*/
@Injectable()
export class QueueService {
	tasks: BaseTask[] = [];
	/**
	* Creates a new NameListService with the injected Http.
	* @param {Http} http - The injected Http.
	* @constructor
	*/
	constructor() { }

	enqueue(task: BaseTask) {
		this.tasks.push(task);
	}
}
