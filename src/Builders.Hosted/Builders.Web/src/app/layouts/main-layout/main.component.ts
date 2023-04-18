import {Component} from "@angular/core";
import {RouterModule, RouterOutlet} from "@angular/router";

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    standalone: true,
    imports: [RouterOutlet],
})
export class MainComponent {
}