import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/Users-Models';
import { UserDataRenderService } from '../services/user-data-render/user-data-render.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  Newuser: User = new User(0, '', 0, '', '', '', '', 0, 0);

  constructor(private http: UserDataRenderService, private router: Router) {}
  newuserhandle(
    uname: string,
    phno: number,
    accno: number,
    email: string,
    add: string,
    area: string,
    city: string,
    pin: number,
    money: number
  ) {
    this.Newuser.Uname = uname;
    this.Newuser.phoneno = phno;
    this.Newuser.Accountno = accno;
    this.Newuser.email = email;
    this.Newuser.address = add;
    this.Newuser.Area = area;
    this.Newuser.city = city;
    this.Newuser.pincode = pin;
    this.Newuser.bal = money;

    this.http.adduser(this.Newuser).subscribe((data) => {});
    this.router.navigate(['/Sucessfully-created']);
  }
  ngOnInit(): void {}
}
