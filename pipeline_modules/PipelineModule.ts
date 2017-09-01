export interface PipelineModule{
    up(param?:any);
    go(param?:any);
    down(param?:any);
    status(param?:any):string;
}