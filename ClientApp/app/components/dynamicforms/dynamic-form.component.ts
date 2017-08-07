﻿import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UINotificationService } from '../../shared/uinotification.service'
import { mr_form_field } from '../../models/entities/mr_form_field'

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
      {{form.value | json }}
    </form>
  `
})

export class DynamicFormComponent implements OnInit {
    @Input()
    config: any[] = [];

    @Output()
    submitted: EventEmitter<any> = new EventEmitter<any>();

    form: FormGroup;

    constructor(private fb: FormBuilder, private uiNotiServ: UINotificationService) {
        //this.uiNotiServ.dynamicControls.subscribe(ctrols => {
        //    this.config = ctrols;
        //    this.form = this.createGroup();
        //});
        console.log("ctor: " + this.config);
    }

    ngOnInit() {
        try {
            console.log("ngInIt: "+this.config);
            this.form = this.createGroup();
        }
        catch (err) {
            console.log(err);
        }
    }

    createGroup() {
        const controlTypeMapping = {
            'Button': 'button',
            'Text Box': 'text',
            'Dropdown List': 'select',
            'Check Box': 'checkbox',
            'Multiline Text Box': 'textarea',
            'Check Box Group': 'checkboxgroup',
            'Multi Select List Box': 'multiselectlistbox',
            'Radio Button Group': 'radiobuttongroup',
            'DatePicker': 'date',
            'time': 'time',
            'Small Text Box': 'text',
            'Label': 'text',
            'widget': 'widget',
            '': 'widgettest'
        };
        this.config.forEach(i => {
            if (i.widget_type == null)
                i.field_type = controlTypeMapping[i.field_type];
            else
                i.field_type = 'widgettest';
                })

        const group = this.fb.group({});
        this.config.forEach(control => {

            switch (control.field_type) {

                case 'multiselectlistbox': {
                    //control.mr_form_field_data- comma separated value to be converted to a array
                    group.addControl(control.mr_form_field_id.toString(), this.fb.control(control.mr_form_field_data))
                    break;
                }
                case 'widgettest': {
                    //var widgetctrl = this.fb.group(control.mr_form_field_data);
                    var widgetctrl = this.fb.group({
                        name: 'prajeen',
                        url: 'wwww.test.com',
                        description: 'Desc',
                        sex: ''
                    });
                    group.addControl(control.mr_form_field_id.toString(), widgetctrl);
                    break;
                }
                default: {
                    if (control.required_indicator) {
                        group.addControl(control.mr_form_field_id.toString(), this.fb.control(control.mr_form_field_data, [Validators.required, Validators.minLength(control.minlenth)]))
                    }
                    else {
                        group.addControl(control.mr_form_field_id.toString(), this.fb.control(control.mr_form_field_data))
                    }
                    break;
                }

            }
        });
        return group;
    }
}