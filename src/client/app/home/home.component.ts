import { Component, OnInit } from '@angular/core';
import { NameListService, WorksManagerService } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
	moduleId: module.id,
	selector: 'sd-home',
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

	newName: string = '';
	errorMessage: string;
	works: any[] = [];

	/**
	 * Creates an instance of the HomeComponent with the injected
	 * NameListService.
	 *
	 * @param {WorksManagerService} worksManager - The injected WorksManagerService.
	 */
	constructor(public worksManager: WorksManagerService) { }

	/**
	 * Get the names OnInit
	 */
	ngOnInit() {
		this.getFeaturedWorks();
	}

	/**
	 * Handle the nameListService observable
	 */
	getFeaturedWorks() {
		this.worksManager.getFeatured()
			.subscribe(
			works => this.works = works,
			error => this.errorMessage = <any>error
			);
	}
}
