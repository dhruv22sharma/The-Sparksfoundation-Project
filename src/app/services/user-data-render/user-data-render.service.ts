import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/Models/Users-Models';

@Injectable({
  providedIn: 'root',
})
export class UserDataRenderService {
  private _url: string = 'http://localhost:3000/user_table';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this._url, { responseType: 'json' })
      .pipe(tap((_) => console.log('users list fetched')));
  }
}
