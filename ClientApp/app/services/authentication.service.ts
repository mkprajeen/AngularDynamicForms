import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthenticationService {

    constructor(private _http: HttpClient) {

    }
    get(url: string): Observable<any> {
        return this._http.get(url)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);

    }
    post(url: string,model:any): Observable<any> {
        return this._http.post(url, model)
            .map((response) => response)
            .catch(this.handleError);

    }
    getUser(url: string): Observable<any> {

        return this._http.get(url)
            .do(console.log)
            .map((response) => response)
            .catch(this.handleError);

    }
    private handleError(error) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
   
}