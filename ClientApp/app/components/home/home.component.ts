import { Component, OnInit } from '@angular/core';
import { mr_form_field } from '../../models/entities/mr_form_field'
import { TemplatebuilderService } from '../../services/templatebuilder.service'
import { UINotificationService } from '../../shared/uinotification.service'
import { Global } from '../../shared/global'



@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit  {
    msg: string;
    config: any[];
  

    constructor(private templateBldrSrv: TemplatebuilderService, private uiNotServ: UINotificationService) {
        
       //this.config = this._templateBldrSrv.getfromLocal();
    }
    ngOnInit() {
        this.templateBldrSrv.get(Global.BASE_TEMPLATE_ENDPOINT +'templatebuilder/GetSectionsForTemplateGroup?templateGroupId=56')
            .subscribe(confgs =>
            {
                const controlTypeMapping = {
                    'Button': 'button',
                    'Text Box': 'text',
                    'Dropdown List': 'select',
                    'Check Box': 'checkbox',
                    'Multiline Text Box': 'textarea',
                    'Check Box Group': 'checkboxgroup',
                    'Multi Select List Box': 'multiselectlistbox',
                    'Radio Button Group': 'radiobuttongroup',
                    'DatePicker': 'date',
                    'time': 'time',
                    'Small Text Box': 'text',
                    'Label': 'text',
                    'widget': 'widget',
                };
                var tt = confgs[1].mr_form_field ;
                this.config = [tt[0], tt[1], tt[2]];
                this.config.forEach(i =>
                {
                    i.field_type = controlTypeMapping[i.field_type];
                })
                this.uiNotServ.dynamicControls.next(this.config);
            },
            error =>
            {
                this.msg = <any>error;
                console.log(this.msg);
            });
        

    }
    formSubmitted(value) {
        console.log(value);
    }
   
    

}
