import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LocalStorageService {
    static storage: KeyValue[] = []; 
    subject: Subject<string> = new Subject<string>();

    constructor() {
        type KeyValue = { key: number, value: string };
    }

    get(key:string) {
        return LocalStorageService.storage.find(i => i.key == key);
    }

    set(key:string, value:string) {
        LocalStorageService.storage.push({ key: key, value: value });
        if (key == 'currentUser')
        {
            this.subject.next(value);
        }
    }
    clear() {
        LocalStorageService.storage.forEach(i => { LocalStorageService.storage.pop(); })
    }
    
}
interface KeyValue {
    key: string;
    value: string;
} 
