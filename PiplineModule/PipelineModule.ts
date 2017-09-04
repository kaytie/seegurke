export interface PipelineModule{
    up(param?:any):Promise<any>;
    go(param?:any):Promise<any>;
    down(param?:any):Promise<any>;
    status(param?:any):Promise<string>;
    technology():Promise<string>;
    iAmA():Promise<string>;
}