import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { Referer } from '../../shared/models/referer.model';

@Component({
    selector: 'widgettest',
    templateUrl: './widgettest.component.html'
})
export class WidgetTestComponent {
    config;
    referer: Referer;


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
