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
    

}
