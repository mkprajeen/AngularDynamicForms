import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class TemplatebuilderService {
   
   private data :Array<any> = [
    {
        mr_form_field_id: 11,
        data_type: 'string',
        field_type: 'input',
        display_label: 'Enter your fisrt name',
        label: 'Lirst name',
        required_indicator: true,
        validationmsg: 'First name is mandatory',
        minlenth: 6,
    },
    {
        mr_form_field_id: 22,
        data_type: 'string',
        field_type: 'input',
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
        mr_form_field_data: 'Pizza,Hot Dogs'
    },
    {
        mr_form_field_id: 88,
        data_type: 'string',
        field_type: 'button',
        label: 'Submit',
    },
    {
        mr_form_field_id: 99,
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
   constructor(private _http: Http)
   { }
    get(url: string):Observable<any>
    {
        return this._http.get(url)
            .map((response: Response) => <any>response.json())
            // .do(data => console.log("All: " + JSON.stringify(data)))
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