import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UINotificationService {

    dynamicControls: Subject<any[]> = new Subject<any[]>();
    constructor() {
    }
}

