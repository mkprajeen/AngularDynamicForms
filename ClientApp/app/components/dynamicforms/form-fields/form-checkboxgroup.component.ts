import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-checkboxgroup',
    //styleUrls: ['form-input.component.scss'],
    template: `
     <div 
      class="dynamic-field form-select"
      [formGroup]="group">
      <label>{{ config.label }}</label>     
        <p *ngFor="let option of config.value_options">
         <input type="checkbox" value = "option"
            [checked]="setCheckedValue(config.mr_form_field_data,option)"
            (change)="updateChangeValue($event)" />{{ option }}<br> 
       </p>
     <input
        id="{{config.mr_form_field_id}}"
        type="text" [value]= "chkgrpvalue" [formControlName]="config.mr_form_field_id" />
    </div>`
})
export class FormCheckBoxGroupComponent {
    config;
    group: FormGroup;
    private chkgrpvalue: string;
    setCheckedValue(option: string[],val:string): boolean
    {
        this.chkgrpvalue = val;
        return option.some(e => e == val);
    }
    updateChangeValue(event)
    {
        if (event.target.checked) {
            this.chkgrpvalue = event.target.value;
        }
    }
}