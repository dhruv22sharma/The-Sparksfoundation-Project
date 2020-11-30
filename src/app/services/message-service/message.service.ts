import { Injectable } from '@angular/core';
import { User } from '../../Models/Users-Models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  subject = new BehaviorSubject(null);
  constructor() {}

  sendMsg(user: User) {
    this.subject.next(user);
  }
  getMsg() {
    return this.subject.asObservable();
  }
}
