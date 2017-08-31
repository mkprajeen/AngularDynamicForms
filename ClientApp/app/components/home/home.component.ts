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
    encounterSections: any[];
  

    constructor(private templateBldrSrv: TemplatebuilderService, private uiNotServ: UINotificationService) {
        
       //this.config = this._templateBldrSrv.getfromLocal();
    }
    ngOnInit() {
        this.templateBldrSrv.get(Global.BASE_TEMPLATE_ENDPOINT + 'templatebuilder/GetSectionsForTemplateGroup?templateGroupId=45')
       // this.templateBldrSrv.get(Global.BASE_TEMPLATE_ENDPOINT + 'templatebuilder/GetSectionsForEncounter?patientEncounterId=3258') 
            .subscribe(enSections =>
            {
               
                //var formfields = enSections[1].mr_form_field;
                this.encounterSections = [];
                this.encounterSections = enSections;
               
                this.uiNotServ.dynamicSections.next(this.encounterSections);
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
