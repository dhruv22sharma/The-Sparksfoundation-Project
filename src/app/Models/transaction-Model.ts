export class transactions {
  transactionid: number;
  sender: string;
  reciver: string;
  amount: number;
  date: Date;

  constructor(
    transactionid: number,
    sender: string,
    reciver: string,
    amount: number,
    date: Date
  ) {
    this.sender = sender;
    this.reciver = reciver;
    this.amount = amount;
  }
}
