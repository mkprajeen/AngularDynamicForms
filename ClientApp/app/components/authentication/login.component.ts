import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import {LocalStorageService } from '../../services/localstorage.service'

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    loginModel: FormGroup;
    public submitted: boolean;
    constructor(private fb: FormBuilder, private router:Router, private storage:LocalStorageService) {

    }
    ngOnInit() {

        this.loginModel = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(8)]],
        });
    }
    onSubmit({ value, valid }: { value: Login, valid: boolean }) {
        if (value.username == 'dev') {
            this.storage.set('currentUser', 'Prajeen Kumar MK');
            this.router.navigate(['/home']);
        }
    }
}
export class Login  {

    public username: string;
    public passoword: string;
}


