import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-textarea',
    //styleUrls: ['form-input.component.scss'],
    template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <textarea  id="{{config.mrFormFieldId}}"
        [attr.placeholder]="config.displayLabel"
        [formControlName]="config.mrFormFieldId"></textarea>
        <div *ngIf="!(group.controls[config.mrFormFieldId].valid || group.controls[config.mrFormFieldId].pristine) as variable" class="alert alert-danger" >
            <span>{{config.validationmsg}}</span>
        </div>       
    </div>`
})
export class FormTextAreaComponent {
    config;
    group: FormGroup;
}