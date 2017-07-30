import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'
import { Global } from '../../shared/global'


@Component({
    selector: 'encounter-component',
    templateUrl: './encounter.component.html'
})
export class EncounterComponent implements OnInit {

    constructor(private authService: AuthenticationService) {

    }
    ngOnInit(){
        //this.authService.get(Global.BASE_TEMPLATE_ENDPOINT +'templatebuilder/GetSectionsForTemplateGroup?templateGroupId=43')
        //    .subscribe(confgs => { this.config = confgs; },
        //    error => this.msg = <any>error);
    }
}
