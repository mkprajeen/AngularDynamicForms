import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-multiselectlistbox',
    //styleUrls: ['form-input.component.scss'],
    template: `
      <div 
      class="dynamic-field form-select"
      [formGroup]="group">
      <label>{{ config.Label }}</label>
      <select [formControlName]="config.MrFormFieldId"  multiple >
        <option *ngFor="let option of config.MrFormFieldValueOptions" [value]="option.ValueOption">
          {{ option.ValueOption }}
        </option>
      </select>
    </div>
    `
})
export class FormMultiSelectListBoxComponent  {
    config;
    group: FormGroup;
}