import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-select',
    //styleUrls: ['form-select.component.scss'],
    template: `
    <div 
      class="dynamic-field form-select"
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <select [formControlName]="config.mr_form_field_id">
        <option value="">{{ config.display_label }}</option>
        <option *ngFor="let option of config.value_options">
          {{ option }}
        </option>
      </select>
    </div>
  `
})
export class FormSelectComponent// implements Field
{
    config;
    group: FormGroup;
}