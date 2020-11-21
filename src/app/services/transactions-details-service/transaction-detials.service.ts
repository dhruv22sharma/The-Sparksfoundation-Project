import { Injectable } from '@angular/core';
import { transactions } from '../../Models/transaction-Model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TransactionDetialsService {
  subject = new Subject();
  constructor() {}

  sendtransdet(transaction: transactions) {
    this.subject.next(transaction);
  }
  gettransdet() {
    return this.subject.asObservable();
  }
}
