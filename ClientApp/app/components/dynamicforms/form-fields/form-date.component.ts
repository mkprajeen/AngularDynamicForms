import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-date',
    //styleUrls: ['form-input.component.scss'],
    template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <label>{{ config.Label }}</label>
      <input
        id="{{config.MrFormFieldId}}"
        type="date"
        [formControlName]="config.MrFormFieldId" />
        <div *ngIf="!(group.controls[config.MrFormFieldId].valid || group.controls[config.MrFormFieldId].pristine) as variable" class="alert alert-danger" >
            <span>{{config.validationmsg}}</span>
        </div>       
    </div>`
})
export class FormDateComponent {
    config;
    group: FormGroup;
}