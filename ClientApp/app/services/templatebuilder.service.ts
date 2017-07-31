import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TemplatebuilderService {
   
   private data :Array<any> = [
    {
        mr_form_field_id: 11,
        data_type: 'string',
        field_type: 'text',
        display_label: 'Enter your fisrt name',
        label: 'Lirst name',
        required_indicator: true,
        validationmsg: 'First name is mandatory',
        minlenth: 6,
    },
    {
        mr_form_field_id: 22,
        data_type: 'string',
        field_type: 'text',
        display_label: 'Enter your last name',
        label: 'Last name',
        required_indicator: true,
        validationmsg: 'Last name is mandatory',
        minlenth: 6,
    },
    {
        mr_form_field_id: 33,
        data_type: 'string',
        field_type: 'select',
        display_label: 'select your favourite food',
        label: 'Favourite food',
        value_options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
        validationmsg: 'favourite food is mandatory',
    },
    {
        mr_form_field_id: 44,
        data_type: 'bool',
        field_type: 'checkbox',
        label: 'Agree Terms and Conditions',
        validationmsg: 'Please read the Terms and Conditions',
    },
    {
        mr_form_field_id: 55,
        data_type: 'string',
        field_type: 'textarea',
        display_label: 'Enter description',
        label: 'Description',
        required_indicator: true,
        validationmsg: 'Description is mandatory',
        minlenth: 20,
    },
    {
        mr_form_field_id: 66,
        data_type: 'string',
        field_type: 'checkboxgroup',
        display_label: 'select your favourite food',
        label: 'select your choice',
        value_options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
        mr_form_field_data: 'Pizza,Hot Dogs'
    },
    {
        mr_form_field_id: 77,
        data_type: 'string',
        field_type: 'multiselectlistbox',
        display_label: 'select your favourite food',
        label: 'select your choice',
        value_options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
        mr_form_field_data: ['Pizza','Hot Dogs']
    },
    {
        mr_form_field_id: 88,
        data_type: 'string',
        field_type: 'radiobuttongroup',
        display_label: 'Choose one food',
        label: 'select One',
        value_options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
        mr_form_field_data: 'Pizza'
    },
    {
        mr_form_field_id: 99,
        data_type: 'date',
        field_type: 'date',
        label: 'Date of Birth',
        required_indicator: true,
        validationmsg: 'Date of birth is mandatory',
        mr_form_field_data: '2017-01-26',

    },
    {
        mr_form_field_id: 111,
        data_type: 'date',
        field_type: 'time',
        label: 'Enter Time',
        required_indicator: true,
        validationmsg: 'Time is mandatory',
        mr_form_field_data: '22:30',

    },
    {
        mr_form_field_id: 888,
        data_type: 'string',
        field_type: 'button',
        label: 'Submit',
    },
    {
        mr_form_field_id: 999,
        data_type: 'widget',
        field_type: 'widgettest',
        widget_type: 'widgettest',
        mr_form_field_data: {
            name: 'prajeen',
            url: 'wwww.test.com',
            description: 'Desc',
            sex: ''
        },
    }

    ];
   constructor(private _http: Http) {
   }
    
   get(url: string): Observable<any> {
       var token= localStorage.getItem('token');
       //let headers = new Headers([{ 'Content-Type': 'application/json' },
       //    { 'Authorization': 'Bearer ' + token }]);
       let headers = new Headers({ 'Authorization': 'Bearer ' + token });
       let options = new RequestOptions({ headers: headers });
       return this._http.get(url, options)
           .map((response: Response) => <any>response.json())
           //.map((response: Response) => this.data)
           .catch(this.handleError);
   }
    
    getfromLocal(): Array<any> {
 
      return this.data;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}