import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MessageService } from '../services/message-service/message.service';
import { User } from '../Models/Users-Models';
import { transactions } from '../Models/transaction-Model';
import { TransactionDetialsService } from '../services/transactions-details-service/transaction-detials.service';
import { UserDataRenderService } from '../services/user-data-render/user-data-render.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProfileComponent implements OnInit {
  // userData: User = new User(0, '', 0, '', '', '', '', 0, 0);
  userData: User;
  isDataAvialable: boolean = false;
  transcationdata: transactions = new transactions(0, '', '', 0, new Date());
  userslist: User[] = [];
  isbalavial: boolean = false;
  reveicerData: User;
  constructor(
    private transactiondet: TransactionDetialsService,
    private msg: MessageService,
    private router: Router,
    private userlist: UserDataRenderService
  ) {}

  getusers() {
    this.msg.getMsg().subscribe((user) => {
      this.userData = user;
      // debugger;
      this.isDataAvialable = true;
    });
  }
  ngOnInit() {
    this.getusers();
    this.userlist.getUsers().subscribe((data) => {
      this.userslist = data;
      console.log(this.userslist);
    });
  }
  submithandler(amount: number, reciver: number, balance: number) {
    this.transcationdata.amount = amount;
    this.userslist.forEach((element) => {
      if (element.id == reciver) {
        this.reveicerData = element;
      }
    });

    if (this.userData.bal >= this.transcationdata.amount) {
      this.transcationdata.reciver = this.reveicerData.Uname;
      this.transcationdata.sender = this.userData.Uname;
      this.transactiondet.sendtransdet(this.transcationdata);
      this.transcationdata.date = new Date();
      this.userlist.addtransactions(this.transcationdata).subscribe((data) => {
        console.log(data);
      });
      this.router.navigate(['/Trsanction-details']);
      this.userData.bal = this.userData.bal - this.transcationdata.amount;
      this.reveicerData.bal = +this.reveicerData.bal + +amount;

      // this.userlist.updateuser(this.userData);
    } else {
      this.isbalavial = true;
    }
  }
  deposithandler(amount: number) {
    this.userData.bal = +this.userData.bal + +amount;
    console.log(this.userData.bal);
  }
}
