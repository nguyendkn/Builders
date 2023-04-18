import {Component} from "@angular/core";
import {RouterModule} from "@angular/router";

@Component({
    standalone: true,
    selector: 'identity',
    imports: [
        RouterModule
    ],
    template: '<router-outlet></router-outlet>'
})
export class IdentityComponent {
}