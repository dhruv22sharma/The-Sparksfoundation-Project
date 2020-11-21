import {
  Component,
  OnInit,
  OnChanges,
  ChangeDetectionStrategy,
  SimpleChange,
  SimpleChanges,
  DoCheck,
} from '@angular/core';
import { MessageService } from '../services/message-service/message.service';
import { User } from '../Models/Users-Models';
import { transactions } from '../Models/transaction-Model';
import { UserListService } from '../services/user-list-service/user-list.service';
import { TransactionDetialsService } from '../services/transactions-details-service/transaction-detials.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  // userData: User = new User(0, '', 0, '', '', '', '', 0, 0);
  userData: any;
  isDataAvialable: boolean = false;
  transcationdata: transactions = new transactions('', '', 0);
  userslist: User[] = [];
  pciInfo$: any;

  constructor(
    private transactiondet: TransactionDetialsService,
    private msglist: UserListService,
    private msg: MessageService
  ) {}
  // ngOnChanges(changes: SimpleChanges) {
  //   this.msglist.getMsglist().subscribe((users: User[]) => {
  //     this.userslist = users;
  //     console.log(this.userslist);
  //   });
  // }
  // ngDoCheck() {
  //   this.getusers();
  // }
  getusers() {
    this.msg.getMsg().subscribe((user) => {
      this.userData = user;
      debugger;
      this.isDataAvialable = true;
      console.log(this.userData);
    });
  }
  ngOnInit() {
    this.getusers();
  }
  submithandler(amount: number, reciver: string) {
    this.transcationdata.amount = amount;
    this.transcationdata.reciver = reciver;
    this.transcationdata.sender = '';
    console.log(this.userData);
    this.transactiondet.sendtransdet(this.transcationdata);
    console.log(this.transcationdata.reciver);
    console.log(this.transcationdata.sender);
    console.log(this.transcationdata.amount);
  }
}
