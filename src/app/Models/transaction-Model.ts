export class transactions {
  sender: string;
  reciver: string;
  amount: number;
  constructor(sender: string, reciver: string, amount: number) {
    this.sender = sender;
    this.reciver = reciver;
    this.amount = amount;
  }
}
