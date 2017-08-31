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
        mrFormFieldId: 11,
        dataType: 'string',
        fieldType: 'text',
        displayLabel: 'Enter your fisrt name',
        label: 'Lirst name',
        requiredIndicator: true,
        validationmsg: 'First name is mandatory',
        minlenth: 6,
    },
    {
        mrFormFieldId: 22,
        dataType: 'string',
        fieldType: 'text',
        displayLabel: 'Enter your last name',
        label: 'Last name',
        requiredIndicator: true,
        validationmsg: 'Last name is mandatory',
        minlenth: 6,
    },
    {
        mrFormFieldId: 33,
        dataType: 'string',
        fieldType: 'select',
        displayLabel: 'select your favourite food',
        label: 'Favourite food',
        value_options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
        validationmsg: 'favourite food is mandatory',
    },
    {
        mrFormFieldId: 44,
        dataType: 'bool',
        fieldType: 'checkbox',
        label: 'Agree Terms and Conditions',
        validationmsg: 'Please read the Terms and Conditions',
    },
    {
        mrFormFieldId: 55,
        dataType: 'string',
        fieldType: 'textarea',
        displayLabel: 'Enter description',
        label: 'Description',
        requiredIndicator: true,
        validationmsg: 'Description is mandatory',
        minlenth: 20,
    },
    {
        mrFormFieldId: 66,
        dataType: 'string',
        fieldType: 'checkboxgroup',
        displayLabel: 'select your favourite food',
        label: 'select your choice',
        value_options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
        mr_form_field_data: 'Pizza,Hot Dogs'
    },
    {
        mrFormFieldId: 77,
        dataType: 'string',
        fieldType: 'multiselectlistbox',
        displayLabel: 'select your favourite food',
        label: 'select your choice',
        value_options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
        mr_form_field_data: ['Pizza','Hot Dogs']
    },
    {
        mrFormFieldId: 88,
        dataType: 'string',
        fieldType: 'radiobuttongroup',
        displayLabel: 'Choose one food',
        label: 'select One',
        value_options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
        mr_form_field_data: 'Pizza'
    },
    {
        mrFormFieldId: 99,
        dataType: 'date',
        fieldType: 'date',
        label: 'Date of Birth',
        requiredIndicator: true,
        validationmsg: 'Date of birth is mandatory',
        mr_form_field_data: '2017-01-26',

    },
    {
        mrFormFieldId: 111,
        dataType: 'date',
        fieldType: 'time',
        label: 'Enter Time',
        requiredIndicator: true,
        validationmsg: 'Time is mandatory',
        mr_form_field_data: '22:30',

    },
    {
        mrFormFieldId: 888,
        dataType: 'string',
        fieldType: 'button',
        label: 'Submit',
    },
    {
        mrFormFieldId: 999,
        dataType: 'widget',
        fieldType: 'widgettest',
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
       if (typeof window !== 'undefined') 
             var token= localStorage.getItem('token');
       //let headers = new Headers([{ 'Content-Type': 'application/json' },
       //    { 'Authorization': 'Bearer ' + token }]);
       let headers = new Headers({ 'Authorization': 'Bearer ' + token });
       let options = new RequestOptions({ headers: headers });
       return this._http.get(url, options)
           .map((response: Response) => <Array <any>>response.json())

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