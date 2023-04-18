import {Component, Input} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
    standalone: true,
    selector: 'treeview-node',
    templateUrl: './treeview-node.component.html',
    imports: [CommonModule]
})
export class TreeviewNodeComponent {
    @Input() treeData: any;
}