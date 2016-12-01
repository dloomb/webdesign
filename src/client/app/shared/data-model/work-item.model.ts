export class WorkItemModel {
	id: string;
	thumbnailUrl: string;
	isActive: boolean;
	workId: string;
	productId: string;

	constructor(data: any) {
		this.id = data['id'];
		this.thumbnailUrl = data['thumbnail_url'];
		this.isActive = data['is_active'];
		this.workId = data['work_id'];
		this.productId = data['product_id'];
	}

	toJson(): { [id: string] : any } {
		return {
			id: this.id,
			title: this.id,
			thumbnail_url: this.thumbnailUrl,
			is_active: this.isActive,
			work_id: this.workId,
			product_id: this.productId
		};
	}

	toString(): string {
		return JSON.stringify(this.toJson());
	}
}