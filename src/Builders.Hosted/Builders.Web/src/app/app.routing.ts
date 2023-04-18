import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./layouts/main.component";
import {IdentityComponent} from "./layouts/identity.component";

const routes: Routes = [
    {
        path: 'identity',
        component: IdentityComponent,
        children: []
    },
    {
        path: 'main',
        component: MainComponent,
        children: [
            {
                path: 'workflow',
                loadComponent: () => import('./features/workflow-feature/workflow.component').then(c => c.WorkflowComponent)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
