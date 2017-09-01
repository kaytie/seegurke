import { PipelineModule } from '../PipelineModule';
export class CSVCrawler implements PipelineModule{
    private path:string;

    public up(param: any): any {
        this.path = param["path"];
    }

    public go(param: any): any {
        throw new Error('Not implemented yet.');
    }

    public down(param: any): any {
        throw new Error('Not implemented yet.');
    }

    public status(param: any): string {
        throw new Error('Not implemented yet.');
    }

    public technology(): string {
        throw new Error('Not implemented yet.');
    }

    public iAmA(): string {
        throw new Error('Not implemented yet.');
    }
}