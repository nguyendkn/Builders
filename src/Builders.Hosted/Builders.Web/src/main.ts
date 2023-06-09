/// <reference types="@angular/localize" />

import {environment} from "@environments";
import {enableProdMode, importProvidersFrom} from "@angular/core";
import {bootstrapApplication, BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {NgxsModule} from "@ngxs/store";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {RouterModule, Routes} from "@angular/router";
import {WorkflowState} from "./app/features/workflow-feature/workflow.state";
import {HttpClientModule} from "@angular/common/http";
import {registerLocaleData} from "@angular/common";
import en from '@angular/common/locales/en';
import {en_US, NZ_I18N} from "ng-zorro-antd/i18n";

const routes: Routes = [
    {
        path: 'identity',
        loadChildren: () => import('./app/layouts/identity-layout/identity.component').then(m => m.IdentityComponent)
    },
    {
        path: 'main',
        loadComponent: () => import('./app/layouts/main-layout/main.component').then(m => m.MainComponent),
        children: [
            {
                path: 'workflow',
                loadComponent: () => import('./app/features/workflow-feature/workflow.component').then(c => c.WorkflowComponent),
                providers: [
                    importProvidersFrom(
                        NgxsModule.forFeature([WorkflowState])
                    )
                ]
            }
        ]
    }
];

if (environment.production) {
    enableProdMode();
}
registerLocaleData(en);
bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(
        BrowserModule,
        HttpClientModule,
        NgxsModule.forRoot([], {
            developmentMode: !environment.production,
            selectorOptions: {
                suppressErrors: false,
                injectContainerState: false
            }
        }),
        NgxsLoggerPluginModule.forRoot({
            collapsed: true,
            logger: console,
            disabled: environment.production,
        }),
        NgxsReduxDevtoolsPluginModule.forRoot({
            disabled: environment.production,
        }),
        RouterModule.forRoot(routes),
    ), { provide: NZ_I18N, useValue: en_US }]
}).catch(err => console.error(err));