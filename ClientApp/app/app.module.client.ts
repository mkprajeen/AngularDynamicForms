import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { sharedConfig } from './app.module.shared';
import { TemplatebuilderService } from './services/templatebuilder.service'
import { AuthenticationGuard } from './components/authentication/authentication-guard'
import { AuthenticationService } from './services/authentication.service'
import { UINotificationService } from './shared/uinotification.service'
import { AuthenticationInterceptor } from './components/authentication/authentication.interceptor'
import { AuthenticationStore } from './components/authentication/authentication.store'

@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        ...sharedConfig.imports
    ],
    providers: [
        { provide: 'ORIGIN_URL', useValue: location.origin },
        TemplatebuilderService, AuthenticationGuard, AuthenticationService, UINotificationService,
        AuthenticationStore,
        [{
            provide: HTTP_INTERCEPTORS, useClass:
            AuthenticationInterceptor, multi: true
        }]
    ]
})
export class AppModule {
}
