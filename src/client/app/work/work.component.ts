import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NameListService, WorksManagerService } from '../shared/index';

/**
 * This class represents the lazy loaded WorkComponent.
 */
@Component({
	moduleId: module.id,
	selector: 'fd-work',
	templateUrl: 'work.component.html',
	styleUrls: ['work.component.css'],
})
export class WorkComponent implements OnInit {

	newName: string = '';
	errorMessage: string;
	work: any;

	/**
	 * Creates an instance of the WorkComponent with the injected
	 * NameListService.
	 *
	 * @param {WorksManagerService} worksManager - The injected WorksManagerService.
	 */
	constructor(public route: ActivatedRoute, public worksManager: WorksManagerService) { }

	/**
	 * Get the names OnInit
	 */
	ngOnInit() {
		this.getWorkWithAllIncludedMembers();
	}

	/**
	 * Handle the nameListService observable
	 */
	getWorkWithAllIncludedMembers() {
		this.route
			.params
			.flatMap((params: any) => {
				return this.worksManager.getWork(params['work_id']);
			}).subscribe(
				work => this.work = work,
				error => this.errorMessage = <any>error
			);

	}
}
