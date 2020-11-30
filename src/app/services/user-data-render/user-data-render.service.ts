import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/Models/Users-Models';
import { transactions } from 'src/app/Models/transaction-Model';

@Injectable({
  providedIn: 'root',
})
export class UserDataRenderService {
  private _url: string = 'http://localhost:3000/user_table';
  constructor(private http: HttpClient) {}
  //GETTING USERS LIST
  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this._url, { responseType: 'json' })
      .pipe(tap((_) => console.log('users list fetched')));
  }
  //GETTING TRANSACTION LIST
  gettransactions(): Observable<transactions[]> {
    return this.http
      .get<transactions[]>('http://localhost:3000/transactions', {
        responseType: 'json',
      })
      .pipe(tap((_) => console.log('users list fetched')));
  }
  //ADDING NEW USER
  adduser(data: User) {
    return this.http.post('http://localhost:3000/Add_user', data);
  }
  //ADDING new transactions
  addtransactions(data: transactions) {
    console.log(data);

    return this.http.post('http://localhost:3000/Add_transaction', data);
  }
  //UPDATING USERS
  updateamount(data) {
    return this.http.put('http://localhost:3000/update_user', data);
  }
}
