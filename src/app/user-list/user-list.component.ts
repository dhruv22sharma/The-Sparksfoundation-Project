import { Component, OnInit } from '@angular/core';
import { User } from '../Models/Users-Models';
import { MessageService } from '../services/message-service/message.service';
import { Router } from '@angular/router';
import { UserDataRenderService } from '../services/user-data-render/user-data-render.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [
    new User(
      1,
      'Dhruv',
      9345059040,
      'dhruv@gmail.com',
      'C-6,DSIL',
      'Dhampur',
      'Bijnor',
      246722,
      333
    ),
    new User(
      2,
      'Kriti',
      8477017123,
      'kriti@gmail.com',
      'C-6,preetvihar',
      'New delhi',
      'Delhi',
      110018,
      3433
    ),
    new User(
      3,
      'saurabh',
      8477017124,
      'saurabh@gmail.com',
      'C-18,moti vihar',
      'rosera',
      'patna',
      333001,
      34
    ),
    new User(
      4,
      'saqib',
      8477017129,
      'saqib@gmail.com',
      '24/2,hawmpti society',
      'chattisgarh',
      'chattisgarh',
      110222,
      4000
    ),
    new User(
      5,
      'shivam',
      8477017143,
      'shivam@gmail.com',
      'C-3,guru society',
      'gurugram',
      'Delhi NCR',
      110018,
      34000
    ),
  ];
  constructor(
    private msg: MessageService,
    private router: Router,
    private userlist: UserDataRenderService
  ) {}

  ngOnInit() {
    this.userlist.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }
  handleprofile(user: User) {
    this.msg.sendMsg(user);
    this.router.navigate(['/Profile']);
  }
}
