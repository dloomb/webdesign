import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/do';  // for debugging

import { WorkModel } from '../data-model/work.model';
import { WorkItemModel } from '../data-model/work-item.model';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class WorksManagerService {

	/**
	 * Creates a new WorkManagerService with the injected Http.
	 * @param {Http} http - The injected Http.
	 * @constructor
	 */
	constructor(private http: Http) { }

	/**
	 * Returns an Observable for the HTTP GET request for the JSON resource.
	 * @return {string[]} The Observable for the HTTP request.
	 */
	getFeatured(): Observable<WorkModel[]> {
		return this.http.get('/assets/fd-data.json')
			.map((res: Response) => {
				const json = res.json();
				const works = json['works'];
				const featured = json['featured'];
				let a: WorkModel[] = [];
				featured.forEach((id : any) => {
					a.push(new WorkModel(works[id]));
				});
				return a;
			})
			.catch(this.handleError);
	}

	getWork(id: string): Observable<WorkModel> {
		// return Observable.of(<any>data['featured'][0])
		// 	.catch(this.handleError);
		return this.http.get('/assets/fd-data.json')
			.map((res: Response) => {
				const json = res.json();
				const works = json['works'];
				const items = json['work_items'];
				const work = new WorkModel(works[id]);
				if(work.workItemIds) {
					work.workItems = [];
					work.workItemIds.forEach(id => {
						work.workItems.push(new WorkItemModel(items[id]));
					});
				}
				return work;
			})
			.catch(this.handleError);
	}

	/**
	  * Handle HTTP error
	  */
	private handleError(error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}

