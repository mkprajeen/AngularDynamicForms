import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UINotificationService } from '../../shared/uinotification.service'



@Injectable()
export class AuthenticationGuard implements CanActivate {
    currentUser: string;
    constructor(private router: Router,
        private uiNotiServ: UINotificationService ) {
        this.uiNotiServ.loginUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.currentUser != null) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}