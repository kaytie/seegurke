export interface PipelineModule{
    up(param?:any):any;
    go(param?:any):any;
    down(param?:any):any;
    status(param?:any):string;
    technology():string;
    iAmA():string;
}