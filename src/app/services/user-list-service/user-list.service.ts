import { Injectable } from '@angular/core';
import { User } from '../../Models/Users-Models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  subject = new BehaviorSubject(null);
  constructor() {}

  sendMsglist(users: User[]) {
    this.subject.next(users);
  }
  getMsglist() {
    return this.subject.asObservable();
  }
}
