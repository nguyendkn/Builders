import {Component, ElementRef, OnInit, Renderer2} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WorkflowService} from "./workflow.service";
import {NzButtonModule} from "ng-zorro-antd/button";
import {IWorkflow} from "./workflow.model";
import {HttpClientModule} from "@angular/common/http";
import {TreeviewComponent} from "@shared/components";
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {NzTableModule} from "ng-zorro-antd/table";

@Component({
    imports: [
        CommonModule,
        HttpClientModule,
        NzButtonModule,
        TreeviewComponent,
        NzDrawerModule,
        NzTableModule
    ],
    selector: 'workflow',
    standalone: true,
    templateUrl: './workflow.component.html'
})
export class WorkflowComponent implements OnInit {
    workflows: IWorkflow[] = [];
    drawerToggle: boolean = false;

    constructor(
        private readonly workflowService: WorkflowService,
        private readonly el: ElementRef,
        private readonly renderer: Renderer2
    ) {
    }

    ngOnInit() {
    }
    
    onToggleDrawer() {
        this.drawerToggle = !this.drawerToggle;
    }

    onPushWorkflow() {
        this.workflows.push({
            name: ''
        })
    }

    
}