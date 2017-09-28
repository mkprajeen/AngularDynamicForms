import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthenticationStore {

    protected token: string;
    protected token$ = new BehaviorSubject<string>(this.token);

    setToken(token: string): any {
        this.token$.next(token);
    }
    getToken(): Observable<string> {
        return Observable.of(this.token);
    }
}