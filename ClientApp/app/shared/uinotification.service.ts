import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UINotificationService {

    dynamicControls: Subject<any[]> = new Subject<any[]>();
    dynamicSections: Subject<any[]> = new Subject<any[]>();
    LoggedIn: Subject<boolean> = new Subject<boolean>();
    UserDetail: Subject<any> = new Subject<any>();
    constructor() {
    }
}

