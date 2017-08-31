import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormButtonComponent } from './form-fields/form-button.component';
import { FormTextComponent } from './form-fields/form-text.component';
import { FormSelectComponent } from './form-fields/form-select.component';
import { FormCheckBoxComponent } from './form-fields/form-checkbox.component';
import { FormTextAreaComponent } from './form-fields/form-textarea.component';
import { FormCheckBoxGroupComponent } from './form-fields/form-checkboxgroup.component';
import { FormMultiSelectListBoxComponent } from './form-fields/form-multiselectlistbox.component';
import { FormRadioButtonGroupComponent } from './form-fields/form-radiobuttongroup.component';
import { FormDateComponent } from './form-fields/form-date.component';
import { FormTimeComponent } from './form-fields/form-time.component';


import { WidgetTestComponent} from './widgets/widgettest.component'

const components = {
    button: FormButtonComponent,
    text: FormTextComponent,
    select: FormSelectComponent,
    checkbox: FormCheckBoxComponent,
    textarea: FormTextAreaComponent,
    checkboxgroup: FormCheckBoxGroupComponent,
    multiselectlistbox: FormMultiSelectListBoxComponent,
    radiobuttongroup: FormRadioButtonGroupComponent,
    date: FormDateComponent,
    time: FormTimeComponent,

    widgettest:WidgetTestComponent,
};

@Directive({
    selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
    @Input()
    config;

    @Input()
    group: FormGroup;

    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
    ) { }

    component;
    ngOnInit() {
        const component = components[this.config.fieldType];
        const factory = this.resolver.resolveComponentFactory<any>(component);
        this.component = this.container.createComponent(factory);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    }
}