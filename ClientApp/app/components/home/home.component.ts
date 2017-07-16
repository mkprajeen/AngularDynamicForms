import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    formSubmitted(value) {
        console.log(value);
    }
    config = [
        {
            type: 'input',
            label: 'first name',
            name: 'fname',
            placeholder: 'Enter your name',
            madatory: true,
            minlenth: 6,
            validationmsg:'first name is mandatory'

        },
        {
            type: 'input',
            label: 'last name',
            name: 'lname',
            placeholder: 'Enter your name',
            madatory: true,
            minlenth: 10,
            validationmsg: 'last name is mandatory'

        },
        {
            type: 'select',
            label: 'Favourite food',
            name: 'food',
            options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
            placeholder: 'Select an option'
        },
        {
            label: 'Submit',
            name: 'submit',
            type: 'button'
        }
    ];
}
