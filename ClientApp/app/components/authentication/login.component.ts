import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { UINotificationService } from '../../shared/uinotification.service'
import { AuthenticationService } from '../../services/authentication.service'
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
        private uiNotServ: UINotificationService  ) {

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
                localStorage.setItem('token', token.access_token);
                //TODO: get user details and user profile info
                if (value.username == 'dev') {
                    localStorage.setItem('currentUser', 'Prajeen Kumar MK');
                    this.uiNotServ.loginUser.next('Prajeen Kumar MK');
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


