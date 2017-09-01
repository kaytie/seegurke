import { PipelineModule } from '../pipeline_modules/PipelineModule';
export class Pipeline {
	private modules: Array<PipelineModule> = [];
	private id: string;

    constructor(config?: object) {}
    
    public async input(data:any){

    }
    public async output(data:any){

    }
	public count() {
		return this.modules.length;
	}

	public add(module: PipelineModule, position?: number) {
		this.modules.splice(position, 0, module);
	}

	public toString(): string {
		let text = '';
		this.modules.forEach(module => {
			text += module.toString() + '\n';
		});
		return text;
	}

	// public toJson(): string {}
}
