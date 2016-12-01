export class BaseTask {
	status: string;
	createdAt: Date;
	updatedAt: Date;

	constructor() {
		this.status = 'new';
		this.createdAt = new Date();
		this.updatedAt = new Date();
	}

	name() : string {
		return 'Error: Call to BaseTask';
	}

	toJson(): any {
		return {
			status: this.status,
			type: this.name(),
			created_at: this.createdAt,
			updated_at: this.updatedAt
		};
	}

	toString(): string {
		return JSON.stringify(this.toJson());
	}
}