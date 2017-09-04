import { PipelineModule } from '../';
export class Aggregator implements PipelineModule {
	up?(param?: any): Promise<any> {
		throw new Error('Method not implemented.');
	}
	go(param?: any): Promise<any> {
		throw new Error('Method not implemented.');
	}
	down?(param?: any): Promise<any> {
		throw new Error('Method not implemented.');
	}
	status(param?: any): Promise<string> {
		throw new Error('Method not implemented.');
	}
	technology?(): Promise<string> {
		throw new Error('Method not implemented.');
	}
	iAmA?(): Promise<string> {
		throw new Error('Method not implemented.');
	}
}
