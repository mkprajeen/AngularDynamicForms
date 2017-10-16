import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/entities/User'
import { UINotificationService } from '../../../shared/uinotification.service'
import { AuthenticationStore } from '../../authentication/authentication.store'

@Component({
    selector: 'shared-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    //loggin: boolean = false;
    logedInUser: string;
    userPhoto: string;
    photo: string;
    constructor(private router: Router, private uiNotiServ: UINotificationService, private authStore: AuthenticationStore) {
        //this.uiNotiServ.LoggedIn.subscribe(logdIn => {
        //    this.loggin = logdIn;
         
        //});
       // this.loggin = authStore.LoggedIn;
        //this.userPhoto = "data:image/JPEG;base64," + authStore.UserDetail.PhotoImage;
        //this.logedInUser = authStore.UserDetail.FirstName + authStore.UserDetail.MiddleName + authStore.UserDetail.LastName;

        this.uiNotiServ.UserDetail.subscribe(cUser => {
            this.userPhoto = "data:image/JPEG;base64," + cUser.PhotoImage;
            this.logedInUser = cUser.FirstName + cUser.MiddleName + cUser.LastName;
        });

    }

    //private _loggin: boolean = false;
    get loggin(): boolean {
        return this.authStore.LoggedIn;
    }
    
   

    onLogout() {
        //this.loggin = false;
        this.logedInUser = null;
        
        this.authStore.getToken().subscribe((tok: string) => {
            console.log("onlogout:" + tok);
        });
        this.authStore.setToken(null);
        this.authStore.getToken().subscribe((tok: string) => {
            console.log("onlogout2:" + tok);
        });
       // localStorage.clear();
        this.router.navigate(['/login']);
        location.reload(true);

    }


}
