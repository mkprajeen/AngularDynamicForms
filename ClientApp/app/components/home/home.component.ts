import { Component } from '@angular/core';
import {mr_form_field} from '../shared/models/entities/mr_form_field'

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    formSubmitted(value) {
        console.log(value);
    }
    config: mr_form_field[] =
    [
        {
            mr_form_field_id: 11,
            data_type: 'string',
            field_type: 'input',
            display_label: 'Enter your fisrt name',  
            label: 'Lirst name',
            required_indicator:true,
            validationmsg: 'First name is mandatory',
            minlenth: 6,
        },
        {
            mr_form_field_id: 22,
            data_type: 'string',
            field_type: 'input',
            display_label: 'Enter your last name',
            label: 'Last name',
            required_indicator: true,
            validationmsg: 'Last name is mandatory',
            minlenth: 6,
        },
        {
            mr_form_field_id: 33,
            data_type: 'string',
            field_type: 'select',
            display_label: 'select your favourite food',
            label: 'Favourite food',
            value_options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
            validationmsg: 'favourite food is mandatory',
        },
        {
            mr_form_field_id:44,
            data_type: 'string',
            field_type: 'button',
            label: 'Submit',
        },
        {
            mr_form_field_id: 55,
            data_type: 'widget',
            field_type: 'widgettest',
            widget_type: 'widgettest',
            mr_form_field_data : {
                name: 'prajeen',
                url: 'wwww.test.com',
                description: 'Desc'
            },
        }

    ];

}
