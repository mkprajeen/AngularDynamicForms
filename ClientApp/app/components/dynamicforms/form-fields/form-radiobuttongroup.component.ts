import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-radiobuttongroup',
    //styleUrls: ['form-input.component.scss'],
    template: `
     <div 
      class="dynamic-field form-select"
      [formGroup]="group">
      <label>{{ config.label }}</label>     
        <p *ngFor="let option of config.mrFormFieldValueOptions">
         <input type="radio" [formControlName]="config.mrFormFieldId"  [value] = "option.valueOption"
            
             />  {{ option.valueOption }}<br> 
       </p>
    </div>`
})
export class FormRadioButtonGroupComponent implements OnInit {
    config;
    group: FormGroup;
    chkgrpvalue: string[]

    ngOnInit() {
        //this.chkgrpvalue = (this.config.mr_form_field_data as string).toString().split(',');
        //this.group.controls[this.config.mrFormFieldId].setValue(this.chkgrpvalue.join(','));
    }

    setCheckedValue(option: string, val: string): boolean {
        return option == val;
    }
    updateChangeValue(event) {
        if (event.target.checked) {
            if (!this.chkgrpvalue.some(i => i == event.target.value)) {
                this.chkgrpvalue.push(event.target.value);
            }
        }
        else {
            if (this.chkgrpvalue.some(i => i == event.target.value)) {
                var index = this.chkgrpvalue.indexOf(event.target.value)
                if (index != -1)
                    this.chkgrpvalue.splice(index, 1);
            }
        }
        this.group.controls[this.config.mrFormFieldId].setValue(this.chkgrpvalue.join(','));
    }
}