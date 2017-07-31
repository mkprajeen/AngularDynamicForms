import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UINotificationService } from '../../../shared/uinotification.service'

@Component({
    selector: 'shared-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent  {
    loggin: boolean=false;
    logedInUser: string;
    constructor(private router: Router, private uiNotiServ: UINotificationService) {
        this.uiNotiServ.loginUser.subscribe(currentUser => {
            this.loggin = true;
            this.logedInUser = currentUser;
        });
       
    }
    onLogout()
    {
        this.loggin = false;
        this.logedInUser = null;
        localStorage.clear();
        this.router.navigate(['/login']);
        location.reload(true);

    }


}
