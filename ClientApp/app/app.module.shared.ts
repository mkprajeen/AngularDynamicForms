import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';
import { EncounterComponent } from './components/encounter/encounter.component';
import { EncounterDetailComponent } from './components/encounter/encounterdetail.component';

import { HeaderComponent } from './components/shared/header/header.component'
import { DynamicFormModule } from './components/dynamicforms/dynamic-form.module';
import { LoginComponent } from './components/authentication/login.component'
import { AuthenticationGuard } from './components/authentication/authentication-guard'



export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        EncounterComponent,
        EncounterDetailComponent,
        HeaderComponent,  
        LoginComponent,
                
    ],
    imports: [
        ReactiveFormsModule,
        DynamicFormModule,
        
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
            { path: 'encounter', component: EncounterComponent },
            { path: 'encounterdetail/:id', component: EncounterDetailComponent },
            { path: 'login', component: LoginComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
