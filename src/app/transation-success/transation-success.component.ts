import { Component, OnInit } from '@angular/core';
import { transactions } from '../Models/transaction-Model';
import { TransactionDetialsService } from '../services/transactions-details-service/transaction-detials.service';
@Component({
  selector: 'app-transation-success',
  templateUrl: './transation-success.component.html',
  styleUrls: ['./transation-success.component.css'],
})
export class TransationSuccessComponent implements OnInit {
  tdetails: transactions = new transactions('', '', 0);
  constructor(private transaction: TransactionDetialsService) {}

  ngOnInit(): void {
    this.transaction.gettransdet().subscribe((transactiondet: transactions) => {
      this.tdetails = transactiondet;
      console.log(this.tdetails);
    });
  }
}
