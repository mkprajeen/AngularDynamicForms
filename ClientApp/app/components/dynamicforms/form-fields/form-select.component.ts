import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-select',
    //styleUrls: ['form-select.component.scss'],
    template: `
    <div 
      class="dynamic-field form-select"
      [formGroup]="group">
      <label>{{ config.Label }}</label>
      <select [formControlName]="config.MrFormFieldId">
        <option value="option.value">{{ config.DisplayLabel }}</option>
        <option *ngFor="let option of config.MrFormFieldValueOptions">
          {{ option.ValueOption }}
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