import {Component, ElementRef, OnInit, Renderer2} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
    standalone: true,
    selector: 'builder-treeview',
    templateUrl: './treeview.component.html',
    imports: [CommonModule]
})
export class TreeviewComponent implements OnInit {
    constructor(
        private readonly el: ElementRef,
        private readonly renderer: Renderer2
    ) {
    }

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
}