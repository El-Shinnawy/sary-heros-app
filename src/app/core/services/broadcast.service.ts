import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Broadcast } from '../interfaces/broadcast';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  private subject = new Subject<any>();

  sendBroadcast(event: Broadcast) {
    this.subject.next(event);
  }

  getBroadcast(): Observable<any> {
    return this.subject.asObservable();
  }
}
