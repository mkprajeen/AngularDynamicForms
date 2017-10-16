import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { UINotificationService } from '../../shared/uinotification.service'
import { AuthenticationService } from '../../services/authentication.service'
import { AuthenticationStore } from './authentication.store'
import { Global } from '../../shared/global'


@Component({
    selector: 'login-component',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    loginModel: FormGroup;
    errorMessage: string;

    constructor(private fb: FormBuilder,
        private router: Router,
        private authServ: AuthenticationService,
        private uiNotServ: UINotificationService,
        private authStore: AuthenticationStore) {

    }
    ngOnInit() {

        this.loginModel = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(8)]],
        });
    }
    onSubmit({ value, valid }: { value: Login, valid: boolean }) {

        this.authServ.post(Global.BASE_TEMPLATE_ENDPOINT + 'TokenAuthentication/Token', { user: value.username, password: value.password })
            .subscribe(token => {                
                if (token.access_token != null) {
                   // this.authStore.setToken(token.access_token);
                    this.authStore.token = token.access_token;
                    this.authStore.LoggedIn = true;
                    //this.uiNotServ.LoggedIn.next(true);

                    //TODO: get user details and user profile info
                    this.authServ.getUser(Global.BASE_TEMPLATE_ENDPOINT + 'users/12')
                        .subscribe(user => {
                            this.uiNotServ.UserDetail.next(user);
                            this.authStore.UserDetail = user;
                        },
                        error => {
                            this.errorMessage = <any>error;
                            console.log(this.errorMessage);
                        });
                   
                    this.router.navigate(['/home']);
                }
            },
            error => this.errorMessage = <any>error);


    }
}
export class Login {

    public username: string;
    public password: string;
}
export class Credentials {
    public user: string;
    public password: string;
}

export class JwtToken {
    public access_token: string;
    public token_type: string;
}


