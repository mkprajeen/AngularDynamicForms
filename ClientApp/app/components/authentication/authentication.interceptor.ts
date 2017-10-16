import { Injectable } from '@angular/core'
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import {  AuthenticationStore } from '../authentication/authentication.store'

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    token: string;
    constructor(private authStore:AuthenticationStore)
    { }

    intercept(req: HttpRequest<any>, next: HttpHandler)
    {
       
        this.authStore.getToken().subscribe((tok: string) =>
        {
            console.log("AuthenticationInterceptor:" + tok);
            this.token = tok
        });
        const headers = { 'Authorization': 'Bearer ' +  this.token};
        const cloneRequest = req.clone({ setHeaders: headers });
            
        return next.handle(cloneRequest);
    }

}