import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-checkboxgroup',
    //styleUrls: ['form-input.component.scss'],
    template: `
     <div 
      class="dynamic-field form-select"
      [formGroup]="group">
      <label>{{ config.label }}</label>     
        <p *ngFor="let option of config.mrFormFieldValueOptions">
         <input type="checkbox" [value] = "option.valueOption"
            [checked]="setCheckedValue(chkgrpvalue,option.valueOption)"
            (change)="updateChangeValue($event)" />  {{ option.valueOption }}<br> 
       </p>
    </div>`
})
export class FormCheckBoxGroupComponent implements OnInit {
    config;
    group: FormGroup;
    chkgrpvalue: string[]

    ngOnInit() {
        this.chkgrpvalue = (this.config.mrFormFieldData as string).toString().split(',');
        this.group.controls[this.config.mrFormFieldId].setValue(this.chkgrpvalue.join(','));
    }

    setCheckedValue(option: string[], val: string): boolean {
        return option.some(e => e == val);
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