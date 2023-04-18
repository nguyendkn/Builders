import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WorkflowService} from "./workflow.service";
import {NzButtonModule} from "ng-zorro-antd/button";
import {IWorkflow} from "./workflow.model";
import {HttpClientModule} from "@angular/common/http";

@Component({
    imports: [
        CommonModule,
        HttpClientModule,
        NzButtonModule,
    ],
    selector: 'workflow',
    standalone: true,
    templateUrl: './workflow.component.html'
})
export class WorkflowComponent {
    workflows: IWorkflow[] = [];

    constructor(
        private readonly workflowService: WorkflowService
    ) {
    }

    onPushWorkflow() {
        this.workflows.push({
            name: ''
        })
    }
}