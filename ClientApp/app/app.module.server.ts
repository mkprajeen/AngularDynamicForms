import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { sharedConfig } from './app.module.shared';
import { TemplatebuilderService } from './services/templatebuilder.service'
import { AuthenticationGuard } from './components/authentication/authentication-guard'
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service'
import { UINotificationService } from './shared/uinotification.service'

@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        ServerModule,
        FormsModule,
        ...sharedConfig.imports
    ],
    providers: [
        
        TemplatebuilderService, AuthenticationGuard, AuthenticationService, UINotificationService
    ]
})
export class AppModule {
}
