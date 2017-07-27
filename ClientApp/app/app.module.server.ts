import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { sharedConfig } from './app.module.shared';
import { TemplatebuilderService } from './services/templatebuilder.service'
import { AuthenticationGuard } from './components/authentication/authentication-guard'
import { FormsModule } from '@angular/forms';

@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        ServerModule,
        FormsModule,
        ...sharedConfig.imports
    ],
    providers: [
        
        TemplatebuilderService, AuthenticationGuard
    ]
})
export class AppModule {
}
