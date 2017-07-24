import { Component } from '@angular/core';
import { mr_form_field } from '../../models/entities/mr_form_field'
import { TemplatebuilderService } from '../../services/templatebuilder.service'
import { Global } from '../../shared/global'


@Component({
    selector: 'home',
    providers: [TemplatebuilderService],
    templateUrl: './home.component.html'
})
export class HomeComponent {
    msg: string;
    constructor(private _templateBldrSrv: TemplatebuilderService) {
        //this._templateBldrSrv.get(Global.BASE_TEMPLATE_ENDPOINT +'GetSectionsForTemplateGroup?templateGroupId=43')
        //    .subscribe(confgs => { this.config = confgs; },
        //    error => this.msg = <any>error);
        this.config = this._templateBldrSrv.getfromLocal();
       
    }
    formSubmitted(value) {
        console.log(value);
    }
    config: mr_form_field[];
    //config: mr_form_field[] =
    //[
    //    {
    //        mr_form_field_id: 11,
    //        data_type: 'string',
    //        field_type: 'input',
    //        display_label: 'Enter your fisrt name',
    //        label: 'Lirst name',
    //        required_indicator: true,
    //        validationmsg: 'First name is mandatory',
    //        minlenth: 6,
    //    },
    //    {
    //        mr_form_field_id: 22,
    //        data_type: 'string',
    //        field_type: 'input',
    //        display_label: 'Enter your last name',
    //        label: 'Last name',
    //        required_indicator: true,
    //        validationmsg: 'Last name is mandatory',
    //        minlenth: 6,
    //    },
    //    {
    //        mr_form_field_id: 33,
    //        data_type: 'string',
    //        field_type: 'select',
    //        display_label: 'select your favourite food',
    //        label: 'Favourite food',
    //        value_options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
    //        validationmsg: 'favourite food is mandatory',
    //    },
    //    {
    //        mr_form_field_id: 44,
    //        data_type: 'string',
    //        field_type: 'button',
    //        label: 'Submit',
    //    },
    //    {
    //        mr_form_field_id: 55,
    //        data_type: 'widget',
    //        field_type: 'widgettest',
    //        widget_type: 'widgettest',
    //        mr_form_field_data: {
    //            name: 'prajeen',
    //            url: 'wwww.test.com',
    //            description: 'Desc',
    //            sex: ''
    //        },
    //    }

    //];

}
