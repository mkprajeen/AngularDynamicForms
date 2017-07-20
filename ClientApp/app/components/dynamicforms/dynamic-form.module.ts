import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';

import { FormButtonComponent } from './form-fields/form-button.component';
import { FormInputComponent } from './form-fields/form-input.component';
import { FormSelectComponent } from './form-fields/form-select.component';
import { WidgetTestComponent } from './widgets/widgettest.component'
import { DynamicFieldDirective } from './dynamic-field.directive';



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        DynamicFieldDirective,
        DynamicFormComponent,
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
        WidgetTestComponent
    ],
    entryComponents: [
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
        WidgetTestComponent
    ],
    exports: [
        DynamicFormComponent
    ]
})
export class DynamicFormModule { }