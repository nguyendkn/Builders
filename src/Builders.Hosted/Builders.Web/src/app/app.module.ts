import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxsModule} from '@ngxs/store';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';

import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {environment} from "../environments/environment.dev";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxsModule.forRoot([], {developmentMode: !environment.production}),
        NgxsLoggerPluginModule.forRoot({
            collapsed: true,
            logger: console,
            disabled: environment.production,
        }),
        NgxsReduxDevtoolsPluginModule.forRoot({
            disabled: environment.production,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
