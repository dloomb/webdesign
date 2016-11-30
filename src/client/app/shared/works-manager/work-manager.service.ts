import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/do';  // for debugging

import { WorkModel } from '../data-model/work.model';

const data = {
	featured: <WorkModel[]> [
		new WorkModel({
			id: 'wrk_abc123',
			title: 'Goron Head',
			is_active: true,
			thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/fire-dino.appspot.com/o/public%2Fgoron.png?alt=media&token=5c6384c8-04fa-4199-b1e7-7bc0033a1d91'
		}),
		new WorkModel({
			id: 'wrk_abc124',
			title: 'Leaf from Pokemon',
			is_active: true,
			thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/fire-dino.appspot.com/o/public%2Fleaf.png?alt=media&token=00b9c14d-1de2-49ab-9b0a-e00c6b803cd8'
		}),
		new WorkModel({
			id: 'wrk_abc125',
			title: 'Metroid Hatchling',
			is_active: true,
			thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/fire-dino.appspot.com/o/public%2Fmetroid.png?alt=media&token=c19e77b9-3223-42e6-a57c-34187f236fba'
		})
	]
};

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
				const featured = res.json()['featured'];
				let a: WorkModel[] = [];
				featured.forEach((item : any) => {
					a.push(new WorkModel(item));
				});
				return a;
			})
			//              .do(data => console.log('server data:', data))  // debug
			.catch(this.handleError);
		// return Observable.of(<any>data['featured'])
		// 	.catch(this.handleError);
	}

	getWork(id: string): Observable<WorkModel[]> {
		return Observable.of(<any>data['featured'][0])
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

