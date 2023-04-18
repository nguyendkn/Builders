import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WorkflowService} from "./workflow.service";

@Component({
    standalone: true,
    selector: 'workflow',
    templateUrl: './workflow.component.html',
    imports: [CommonModule]
})
export class WorkflowComponent {
    constructor(
        private readonly workflowService: WorkflowService
    ) {
    }
}