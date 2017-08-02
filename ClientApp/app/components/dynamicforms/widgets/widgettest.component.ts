import { Component } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';

@Component({
    selector: 'widget-test',
    templateUrl: './widgettest.component.html'
})
export class WidgetTestComponent {
    config;
    group: FormGroup;
    //referer: Referer;
    //Referer= new FormGroup({
    //    name: new FormControl(),
    //    url: new FormControl(),
    //    description: new FormControl()
    //});

    constructor() {
        //this.referer = {
        //    name: 'prajeen',
        //    url: 'wwww.test.com',
        //    description: 'Desc'
        //};
        //this.config.mr_form_field_data = {
        //    name: 'prajeen',
        //    url: 'wwww.test.com',
        //    description: 'Desc'
        //};
    }
    ngOnInit() {

        
    }
     

}
