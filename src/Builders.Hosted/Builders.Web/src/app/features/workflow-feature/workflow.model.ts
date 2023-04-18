import {IResponse} from "@shared/models";

export interface IWorkflow {
    name?: string,
    steps?: IWorkflowStep[]
}

export interface IWorkflowStep {
    name: string
}

export interface IWorkflowListRequest {
    page: number
    pageSize: number
}

export interface IWorkflowStateResponse extends IResponse<IWorkflow[]> {
}