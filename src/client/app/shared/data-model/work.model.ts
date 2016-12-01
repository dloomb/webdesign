import { WorkItemModel } from './work-item.model';

export class WorkModel {
	id: string;
	title: string;
	thumbnailUrl: string;
	isActive: boolean;
	workItemIds: string[];
	workItems: WorkItemModel[];

	constructor(data: any) {
		this.id = data['id'];
		this.title = data['title'];
		this.thumbnailUrl = data['thumbnail_url'];
		this.isActive = data['is_active'];
		this.workItemIds = data['work_item_ids'];
	}

	toJson(): { [id: string] : any } {
		return {
			id: this.id,
			title: this.id,
			thumbnail_url: this.thumbnailUrl,
			is_active: this.isActive,
			work_item_ids: this.workItemIds
		};
	}

	toString(): string {
		return JSON.stringify(this.toJson());
	}
}