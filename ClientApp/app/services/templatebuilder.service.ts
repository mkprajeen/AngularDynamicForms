import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders,HttpResponse} from '@angular/common/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TemplatebuilderService {
   
   private data :Array<any> = [
    {
        MrFormFieldId: 11,
        DataType: 'string',
        FieldType: 'text',
        DisplayLabel: 'Enter your fisrt name',
        Label: 'Lirst name',
        RequiredIndicator: true,
        validationmsg: 'First name is mandatory',
        minlenth: 6,
    },
    {
        MrFormFieldId: 22,
        DataType: 'string',
        FieldType: 'text',
        DisplayLabel: 'Enter your last name',
        Label: 'Last name',
        RequiredIndicator: true,
        validationmsg: 'Last name is mandatory',
        minlenth: 6,
    },
    {
        MrFormFieldId: 33,
        DataType: 'string',
        FieldType: 'select',
        DisplayLabel: 'select your favourite food',
        Label: 'Favourite food',
        ValueOptions: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
        validationmsg: 'favourite food is mandatory',
    },
    {
        MrFormFieldId: 44,
        DataType: 'bool',
        FieldType: 'checkbox',
        Label: 'Agree Terms and Conditions',
        validationmsg: 'Please read the Terms and Conditions',
    },
    {
        MrFormFieldId: 55,
        DataType: 'string',
        FieldType: 'textarea',
        DisplayLabel: 'Enter description',
        Label: 'Description',
        RequiredIndicator: true,
        validationmsg: 'Description is mandatory',
        minlenth: 20,
    },
    {
        MrFormFieldId: 66,
        DataType: 'string',
        FieldType: 'checkboxgroup',
        DisplayLabel: 'select your favourite food',
        Label: 'select your choice',
        ValueOptions: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
        MrFormFieldData: 'Pizza,Hot Dogs'
    },
    {
        MrFormFieldId: 77,
        DataType: 'string',
        FieldType: 'multiselectlistbox',
        DisplayLabel: 'select your favourite food',
        Label: 'select your choice',
        ValueOptions: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
        MrFormFieldData: ['Pizza','Hot Dogs']
    },
    {
        MrFormFieldId: 88,
        DataType: 'string',
        FieldType: 'radiobuttongroup',
        DisplayLabel: 'Choose one food',
        Label: 'select One',
        ValueOptions: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
        MrFormFieldData: 'Pizza'
    },
    {
        MrFormFieldId: 99,
        DataType: 'date',
        FieldType: 'date',
        Label: 'Date of Birth',
        RequiredIndicator: true,
        validationmsg: 'Date of birth is mandatory',
        MrFormFieldData: '2017-01-26',

    },
    {
        MrFormFieldId: 111,
        DataType: 'date',
        FieldType: 'time',
        Label: 'Enter Time',
        RequiredIndicator: true,
        validationmsg: 'Time is mandatory',
        MrFormFieldData: '22:30',

    },
    {
        MrFormFieldId: 888,
        DataType: 'string',
        FieldType: 'button',
        Label: 'Submit',
    },
    {
        MrFormFieldId: 999,
        DataType: 'widget',
        FieldType: 'widgettest',
        WidgetType: 'widgettest',
        MrFormFieldData: {
            name: 'prajeen',
            url: 'wwww.test.com',
            description: 'Desc',
            sex: ''
        },
    }

    ];
   constructor(private _http: HttpClient) {
   }
    
   get(url: string): Observable<any> {
   
       return this._http.get(url)
           .map((response) => response)
           .catch(this.handleError);
   }
    
    getfromLocal(): Array<any> {
 
      return this.data;
    }

    private handleError(error) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }

}