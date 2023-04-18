import {Component, ElementRef, Input, OnInit, Renderer2} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TreeviewNodeComponent} from "./components/treeview-node.component";

@Component({
    standalone: true,
    selector: 'builders-treeview',
    templateUrl: './treeview.component.html',
    imports: [CommonModule, TreeviewNodeComponent]
})
export class TreeviewComponent implements OnInit {
    scale: number = 1;

    constructor(
        private readonly el: ElementRef,
        private readonly renderer: Renderer2
    ) {
    }

    data = [
        {
            "name": "Parent",
            "children": [
                {
                    "name": "Child 1",
                    "children": [
                        {
                            "name": "Child 1.1",
                            "children": []
                        },
                        {
                            "name": "Child 1.2",
                            "children": []
                        },
                    ]
                },
            ]
        }
    ];

    ngOnInit() {
        this.initializeTree()
    }

    initializeTree(): void {
        const ulElements = this.el.nativeElement.querySelectorAll('.genealogy-tree ul');
        ulElements.forEach((ul: HTMLElement) => {
            this.renderer.setStyle(ul, 'display', 'none');
        });

        const topLevelUl = this.el.nativeElement.querySelector('.genealogy-tree > ul');
        this.renderer.setStyle(topLevelUl, 'display', 'block');

        const activeUlElements = this.el.nativeElement.querySelectorAll('.genealogy-tree ul.active');
        activeUlElements.forEach((ul: HTMLElement) => {
            this.renderer.setStyle(ul, 'display', 'block');
        });

        const liElements = this.el.nativeElement.querySelectorAll('.genealogy-tree li');
        liElements.forEach((li: HTMLElement) => {
            this.renderer.listen(li, 'click', (event: Event) => {
                event.stopPropagation();
                const children = li.querySelector(':scope > ul');
                // @ts-ignore
                if (children.style.display === 'block') {
                    this.renderer.setStyle(children, 'display', 'none');
                    this.renderer.removeClass(children, 'active');
                } else {
                    this.renderer.setStyle(children, 'display', 'block');
                    this.renderer.addClass(children, 'active');
                }
            });
        });
    }

    zoomIn() {
        this.scale += 0.1;
    }

    zoomOut() {
        this.scale -= 0.1;
    }
}