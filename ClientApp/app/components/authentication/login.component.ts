import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    loginModel: login;
    constructor() {

    }
}
export class login {

    public username: string;
    public passoword: string;
}