import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UINotificationService } from '../../shared/uinotification.service'
import { AuthenticationStore } from './authentication.store'



@Injectable()
export class AuthenticationGuard implements CanActivate {
    LoggedIn: boolean;
    constructor(private router: Router,
        private uiNotiServ: UINotificationService, private authStor: AuthenticationStore ) {
        //this.uiNotiServ.LoggedIn.subscribe(lgdIn => {
        //    this.LoggedIn = lgdIn;
        //});
        this.LoggedIn = authStor.LoggedIn;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("AuthenticationGuard:" + this.LoggedIn);
        if (this.authStor.LoggedIn) {

           return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}