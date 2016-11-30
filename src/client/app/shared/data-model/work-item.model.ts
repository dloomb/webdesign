export class WorkItemModel {
	id: string;
	thumbnailUrl: string;
	isActive: boolean;
	constructor(data: any) {
		this.id = data['id'];
		this.thumbnailUrl = data['thumbnail_url'];
		this.isActive = data['is_active'];
	}

	toJson(): { [id: string] : any } {
		return {
			id: this.id,
			title: this.id,
			thumbnail_url: this.thumbnailUrl,
			is_active: this.isActive,
		};
	}

	toString(): string {
		return JSON.stringify(this.toJson());
	}
}