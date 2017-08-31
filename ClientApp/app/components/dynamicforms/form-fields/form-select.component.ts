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
      <select [formControlName]="config.mrFormFieldId">
        <option value="option.value">{{ config.displayLabel }}</option>
        <option *ngFor="let option of config.mrFormFieldValueOptions">
          {{ option.valueOption }}
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