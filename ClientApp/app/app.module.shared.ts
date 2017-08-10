import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';
import { MainFormComponent } from './components/dynamicforms/main-form/main-form.component'
import { EncounterComponent } from './components/encounter/encounter.component';
import { EncounterDetailComponent } from './components/encounter/encounterdetail.component';

import { HeaderComponent } from './components/shared/header/header.component'
import { NavMenuComponent } from './components/shared/navmenu/navmenu.component';
import { DynamicFormModule } from './components/dynamicforms/dynamic-form.module';
import { LoginComponent } from './components/authentication/login.component'
import { AuthenticationGuard } from './components/authentication/authentication-guard'
import { MdTabsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        MainFormComponent,
        EncounterComponent,
        EncounterDetailComponent,
        HeaderComponent, 
        NavMenuComponent,
        LoginComponent, 
                
    ],
    imports: [
        ReactiveFormsModule,
        DynamicFormModule, MdTabsModule,
        BrowserModule,
        BrowserAnimationsModule,
        
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
