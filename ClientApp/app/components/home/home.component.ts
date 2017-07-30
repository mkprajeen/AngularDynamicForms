import { Component, OnInit } from '@angular/core';
import { mr_form_field } from '../../models/entities/mr_form_field'
import { TemplatebuilderService } from '../../services/templatebuilder.service'
import { Global } from '../../shared/global'


@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit  {
    msg: string;
    config: mr_form_field[];
    config1: any;
    constructor(private _templateBldrSrv: TemplatebuilderService) {
        
       //this.config = this._templateBldrSrv.getfromLocal();
    }
    ngOnInit() {
        this._templateBldrSrv.get(Global.BASE_TEMPLATE_ENDPOINT +'templatebuilder/GetSectionsForTemplateGroup?templateGroupId=43')
            .subscribe(confgs =>
            {
                var tt = confgs[0].mr_form_field;
                this.config = tt;
            },
            error => this.msg = <any>error);
        

    }
    formSubmitted(value) {
        console.log(value);
    }
   
    

}
