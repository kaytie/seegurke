import { PipelineModule } from '../PipelineModule';
import * as http from "http";

export class RemoteFunction implements PipelineModule {
	private url: string;
	up(param?: any) {
		this.url = param['url'];
	}
    
    async go(param?: any) {
		http.get({
            hostname: 'localhost',
            port: 80,
            path: '/',
            agent: false  // create a new agent just for this one request
          }, (res) => {
            // Do stuff with response
          });
	}
	down(param?: any) {
		throw new Error('Method not implemented.');
	}
	status(param?: any): string {
		throw new Error('Method not implemented.');
	}
	technology(): string {
		throw new Error('Method not implemented.');
	}
	iAmA(): string {
		throw new Error('Method not implemented.');
	}
}
