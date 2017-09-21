import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/entities/User'
import { UINotificationService } from '../../../shared/uinotification.service'

@Component({
    selector: 'shared-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    loggin: boolean = false;
    logedInUser: string;
    userPhoto: string;
    photo: string;
    constructor(private router: Router, private uiNotiServ: UINotificationService) {
        this.uiNotiServ.loginUser.subscribe(currentUser => {
            this.loggin = true;
            this.logedInUser = currentUser;
        });

        this.uiNotiServ.UserDetail.subscribe(cUser => {
            this.userPhoto = "data:image/JPEG;base64,"+ cUser.PhotoImage;
        });

    }

     private test(buffer:any):string {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }

    onLogout() {
        this.loggin = false;
        this.logedInUser = null;
        localStorage.clear();
        this.router.navigate(['/login']);
        location.reload(true);

    }


}
