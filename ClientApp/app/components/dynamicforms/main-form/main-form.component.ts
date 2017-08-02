import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UINotificationService } from '../../../shared/uinotification.service'


@Component({
    selector: 'main-form',
    templateUrl: './main-form.component.html'
})
export class MainFormComponent implements OnInit {
   // @Input()
    encounterSections: any[] = [];

   public referer: FormGroup;
   public submitted: boolean;


   constructor(private fb: FormBuilder, private uiNotiServ: UINotificationService) {
       this.uiNotiServ.dynamicSections.subscribe(enSection => {
           this.encounterSections = enSection;
       });
   }
    ngOnInit(){


    }
    onSubmit({ value, valid } : { value: any, valid: boolean }){
        this.submitted = true;
        console.log(value, valid);

    }

}
