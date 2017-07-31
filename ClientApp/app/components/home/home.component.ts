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
                //var tt = confgs[1].mr_form_field ;
                //this.config = [tt[0], tt[1], tt[2]];
                this.uiNotServ.dynamicControls.next(confgs);
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
