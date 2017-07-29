import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../services/localstorage.service'

@Component({
    selector: 'shared-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent  {
    loggin: boolean=false;
    logedInUser: string;
    constructor(private router: Router, private storage: LocalStorageService) {
        storage.subject.subscribe(currentUser => {
            this.loggin = true;
            this.logedInUser = currentUser;
        });
       
    }
    onLogout()
    {
        this.loggin = false;
        this.logedInUser = null;
        this.storage.clear();
        this.router.navigate(['/login']);

    }


}
