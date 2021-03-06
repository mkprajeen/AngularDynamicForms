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
            'Smart Text Box': 'textarea',
            'Label': 'text',
            'widget': 'widget',
            '': 'widgettest'
        };
        this.config.forEach(i => {
            if (i.WidgetType == null)
                i.FieldType = controlTypeMapping[i.FieldType];
            else
                i.FieldType = 'widgettest';
                })

        const group = this.fb.group({});
        this.config.forEach(control => {

            switch (control.FieldType) {

                case 'multiselectlistbox': {
                    //control.MrFormFieldData- comma separated value to be converted to a array
                    group.addControl(control.MrFormFieldId.toString(), this.fb.control(control.MrFormFieldData))
                    break;
                }
                case 'widgettest': {
                    //var widgetctrl = this.fb.group(control.MrFormFieldData);
                    var widgetctrl = this.fb.group({
                        name: 'prajeen',
                        url: 'wwww.test.com',
                        description: 'Desc',
                        sex: ''
                    });
                    group.addControl(control.MrFormFieldId.toString(), widgetctrl);
                    break;
                }
                default: {
                    if (control.RequiredIndicator) {
                        group.addControl(control.MrFormFieldId.toString(), this.fb.control(control.MrFormFieldData, [Validators.required, Validators.minLength(control.minlenth)]))
                    }
                    else {
                        group.addControl(control.MrFormFieldId.toString(), this.fb.control(control.MrFormFieldData))
                    }
                    break;
                }

            }
        });
        return group;
    }
}