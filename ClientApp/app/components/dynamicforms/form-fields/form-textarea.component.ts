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
      <textarea  id="{{config.mr_form_field_id}}"
        [attr.placeholder]="config.display_label"
        [formControlName]="config.mr_form_field_id"></textarea>
        <div *ngIf="!(group.controls[config.mr_form_field_id].valid || group.controls[config.mr_form_field_id].pristine) as variable" class="alert alert-danger" >
            <span>{{config.validationmsg}}</span>
        </div>       
    </div>`
})
export class FormTextAreaComponent {
    config;
    group: FormGroup;
}