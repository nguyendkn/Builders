import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";

@Component({
    standalone: true,
    selector: 'identity',
    templateUrl: './identity.component.html',
    imports: [RouterOutlet],
})
export class IdentityComponent {
}