import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { mr_form_field} from '../shared/models/entities/mr_form_field'

@Component({
    selector: 'dynamic-form',
    //styleUrls: ['dynamic-form.component.scss'],
    template: `
    <form
      class="dynamic-form"
      [formGroup]="form"
      (ngSubmit)="submitted.emit(form.value)">
      <ng-container
        *ngFor="let field of config;"
        dynamicField
        [config]="field"
        [group]="form">
      </ng-container>
    </form>
  `
})
export class DynamicFormComponent implements OnInit {
    @Input()
    config: mr_form_field[] = [];

    @Output()
    submitted: EventEmitter<any> = new EventEmitter<any>();

    form: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.createGroup();
    }

    createGroup() {
        const group = this.fb.group({});
        this.config.forEach(control =>
        {
            if (control.required_indicator) {
                group.addControl(control.mr_form_field_id.toString(), this.fb.control('', [Validators.required, Validators.minLength(control.minlenth)]))
            }
            else if (control.data_type=='widget')
            {
                group.addControl(control.mr_form_field_id.toString(), this.fb.control('')) 
            }
            else
            {
                group.addControl(control.mr_form_field_id.toString(), this.fb.control(''))
            }
                
        });
        return group;
    }
}