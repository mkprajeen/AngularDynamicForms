import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerModule } from '@angular/platform-server';
import { sharedConfig } from './app.module.shared';
import { TemplatebuilderService } from './services/templatebuilder.service'
import { AuthenticationGuard } from './components/authentication/authentication-guard'
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service'
import { UINotificationService } from './shared/uinotification.service'
import { AuthenticationInterceptor } from './components/authentication/authentication.interceptor'
import { AuthenticationStore} from './components/authentication/authentication.store'

@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        ServerModule,
        FormsModule,
        HttpClientModule,
        ...sharedConfig.imports
    ],
    providers: [
        
        //TemplatebuilderService, AuthenticationGuard, AuthenticationService, UINotificationService, AuthenticationStore,
        //[{
        //    provide: HTTP_INTERCEPTORS, useClass:
        //    AuthenticationInterceptor, multi: true
        //}]
    ]
})
export class AppModule {
}
