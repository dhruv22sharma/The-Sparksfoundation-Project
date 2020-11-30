import { Component, OnInit } from '@angular/core';
import { transactions } from '../Models/transaction-Model';
import { UserDataRenderService } from '../services/user-data-render/user-data-render.service';

@Component({
  selector: 'app-transction-list',
  templateUrl: './transction-list.component.html',
  styleUrls: ['./transction-list.component.css'],
})
export class TransctionListComponent implements OnInit {
  transactions: transactions[];
  isdataavial: boolean = false;
  constructor(private transactionlist: UserDataRenderService) {}

  ngOnInit(): void {
    this.transactionlist.gettransactions().subscribe((data) => {
      this.transactions = data;
      console.log(this.transactions);
      this.isdataavial = true;
      console.log(this.isdataavial);
    });
  }
}
