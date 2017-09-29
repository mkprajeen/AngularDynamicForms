import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UINotificationService } from '../../shared/uinotification.service'



@Injectable()
export class AuthenticationGuard implements CanActivate {
    LoggedIn: boolean;
    constructor(private router: Router,
        private uiNotiServ: UINotificationService ) {
        this.uiNotiServ.LoggedIn.subscribe(lgdIn => {
            this.LoggedIn = lgdIn;
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.LoggedIn) {
        //if ((typeof window !== 'undefined') && localStorage.getItem('LoggedIn')!=null){
        //    // logged in so return true
           return this.LoggedIn;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}