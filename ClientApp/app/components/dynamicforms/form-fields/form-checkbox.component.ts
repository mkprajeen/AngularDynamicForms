import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-checkbox',
    //styleUrls: ['form-input.component.scss'],
    template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        id="{{config.mrFormFieldId}}"
        type="checkbox"
        [formControlName]="config.mrFormFieldId" />
        <div *ngIf="!(group.controls[config.mrFormFieldId].valid || group.controls[config.mrFormFieldId].pristine) as variable" class="alert alert-danger" >
            <span>{{config.validationmsg}}</span>
        </div>       
    </div>`
})
export class FormCheckBoxComponent {
    config;
    group: FormGroup;
}