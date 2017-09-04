import { PipelineModule } from '../PipelineModule';
export class CSVCrawler implements PipelineModule {
	private path: string;

	public up(param: any): any {
		this.path = param['path'];
	}

	public go(param: any): Promise<string> {
            return null;

    }

	public async down(param: any): Promise<string> {
		throw new Error('Not implemented yet.');
	}

	public async status(param: any): Promise<string> {
		throw new Error('Not implemented yet.');
	}

	public technology(): Promise<string> {
		throw new Error('Not implemented yet.');
	}

	public iAmA(): string {
		throw new Error('Not implemented yet.');
	}
}
