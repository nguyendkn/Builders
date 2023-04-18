import {Action, State, StateContext} from "@ngxs/store";
import {IWorkflow} from "./workflow.model";

export class WorkflowList {
    static readonly type = '[Workflow] List';

    constructor(public items: any[]) {
    }
}

@State<IWorkflow>({
    name: 'workflow',
    defaults: {}
})
export class WorkflowState {
    @Action(WorkflowList)
    list(ctx: StateContext<IWorkflow>, action: WorkflowList) {
        const state = ctx.getState();
        ctx.setState({...state, items: action.items})
    }

}