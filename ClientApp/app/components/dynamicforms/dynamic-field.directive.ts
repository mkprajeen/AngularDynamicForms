import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormButtonComponent } from './form-fields/form-button.component';
import { FormInputComponent } from './form-fields/form-input.component';
import { FormSelectComponent } from './form-fields/form-select.component';
import { FormCheckBoxComponent } from './form-fields/form-checkbox.component';
import { FormTextAreaComponent } from './form-fields/form-textarea.component';
import { FormCheckBoxGroupComponent } from './form-fields/form-checkboxgroup.component';


import { WidgetTestComponent} from './widgets/widgettest.component'

const components = {
    button: FormButtonComponent,
    input: FormInputComponent,
    select: FormSelectComponent,
    checkbox: FormCheckBoxComponent,
    textarea: FormTextAreaComponent,
    checkboxgroup: FormCheckBoxGroupComponent,

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
        const component = components[this.config.field_type];
        const factory = this.resolver.resolveComponentFactory<any>(component);
        this.component = this.container.createComponent(factory);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    }
}