import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
        this.uiNotiServ.dynamicControls.subscribe(ctrols => {
            this.config = ctrols;
            this.form = this.createGroup();
        });

    }

    ngOnInit() {
        //this.form = this.createGroup();
    }

    createGroup() {
        
        const group = this.fb.group({});
        this.config.forEach(control =>
        {
            switch (control.field_type) {

                case 'multiselectlistbox':{
                    group.addControl(control.mr_form_field_id.toString(), this.fb.control(control.mr_form_field_data))
                    break;
                }
                case 'widget': {
                    var widgetctrl = this.fb.group(control.mr_form_field_data);
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