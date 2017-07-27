import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';



@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private router: Router) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        localStorage.setItem('currentUser', JSON.stringify('dev'));
        localStorage
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        //this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return true;
    }
}