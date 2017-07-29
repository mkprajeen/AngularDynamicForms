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
        var tt = LocalStorageService.storage.find(i => i.key == key);
        return tt;
        //{
        //    if (item.key == key)
        //    {
        //        return item;
        //    }
        //});
        //return null;
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
