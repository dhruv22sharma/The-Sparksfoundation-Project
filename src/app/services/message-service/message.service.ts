import { Injectable } from '@angular/core';
import { User } from '../../Models/Users-Models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  subject = new Subject();
  constructor() {}

  sendMsg(user: User) {
    this.subject.next(user);
  }
  getMsg() {
    return this.subject.asObservable();
  }
}
