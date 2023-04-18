import {Action, State, StateContext} from "@ngxs/store";
import {IWorkflow, IWorkflowStateResponse} from "./workflow.model";
import {Observable} from "rxjs";
import {WorkflowService} from "./workflow.service";
import {Injectable} from "@angular/core";

export class WorkflowList {
    static readonly type = '[Workflow] List';

    constructor(public payload: IWorkflowStateResponse) {
    }
}

@Injectable()
@State<IWorkflowStateResponse>({
    name: 'workflow',
    defaults: {
        success: true,
        data: [] as IWorkflow[],
    }
})
export class WorkflowState {
    constructor(
        private readonly workflowService: WorkflowService
    ) {
    }

    @Action(WorkflowList)
    list(ctx: StateContext<IWorkflowStateResponse>, {payload}: WorkflowList) {
        const state = ctx.getState();
        if (!state.success) {
            return new Observable()
        }
        ctx.patchState({success: true})
        return this.workflowService.list({
            page: 1,
            pageSize: 25
        }).pipe()
    }
}