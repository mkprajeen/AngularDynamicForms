import { Component, OnInit } from '@angular/core';

import { Referer } from '../../shared/models/referer.model';

@Component({
    selector: 'widgettest',
    templateUrl: './widgettest.component.html'
})
export class WidgetTestComponent {

    config: Referer;


    constructor() {
        this.config = {
            name: 'prajeen',
            url: 'wwww.test.com',
            description: 'Desc'
        };
    }
    ngOnInit() {

        
    }
     

}
