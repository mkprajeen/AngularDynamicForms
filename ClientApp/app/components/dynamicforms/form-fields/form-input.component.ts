import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-input',
    //styleUrls: ['form-input.component.scss'],
    template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        id="{{config.name}}"
        type="text"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name" />
        <div *ngIf="!(group.controls[config.name].valid || group.controls[config.name].pristine) as variable" class="alert alert-danger" >
            <span>{{config.validationmsg}}</span>
        </div>       
    </div>`
})
export class FormInputComponent {
    config;
    ctrlid;
    group: FormGroup;
}