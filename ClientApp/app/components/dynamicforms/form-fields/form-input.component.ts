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
        type="text"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name" />
        <div [hidden]="group.controls.name.valid || group.controls.name.pristine" class="alert alert-danger">
                <span *ngIf="!group.controls.name.valid">{{ config.validationmsg }}</span>
        </div>
    </div>`
})
export class FormInputComponent {
    config;
    group: FormGroup;
}