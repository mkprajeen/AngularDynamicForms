import { Component, OnInit } from '@angular/core';
import { TemplatebuilderService } from '../../services/templatebuilder.service'
import { Global } from '../../shared/global'


@Component({
    selector: 'encounter-component',
    templateUrl: './encounter.component.html'
})
export class EncounterComponent implements OnInit {
    encounters: any[]=[];
    msg: string;
    constructor(private tempService: TemplatebuilderService) {

    }
    ngOnInit(){
        this.tempService.get(Global.BASE_TEMPLATE_ENDPOINT +'templatebuilder/GetAllEncountersByPatientId?patientId=52359')
            .subscribe(encounters =>
            {
                this.encounters = encounters;
            },
            error => this.msg = <any>error);
    }
}
