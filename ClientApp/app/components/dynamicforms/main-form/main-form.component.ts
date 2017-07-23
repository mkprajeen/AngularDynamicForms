import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Referer } from '../../../models/referer.model';

@Component({
    selector: 'main-form',
    templateUrl: './main-form.component.html'
})
export class MainFormComponent implements OnInit {
 
   public referer: FormGroup;
   public submitted: boolean;


    constructor(private fb: FormBuilder){}
    ngOnInit(){

        this.referer = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            url: ['', [Validators.required]],
            description: ['', [Validators.required]]
        });
    }
    onSubmit({ value, valid } : { value: Referer, valid: boolean }){
        this.submitted = true;
        console.log(value, valid);

    }

}
