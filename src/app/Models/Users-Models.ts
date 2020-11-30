export class User {
  id: number;
  Uname: string;
  phoneno: number;
  email: string;
  address: string;
  Area: string;
  city: string;
  pincode: number;
  Accountno: number;
  bal: number;
  constructor(
    uid: number,
    name: string,
    phoneno: number,
    email: string,
    address: string,
    Area: string,
    city: string,
    pincode: number,
    bal: number
  ) {
    this.id = uid;
    this.Uname = name;
    this.phoneno = phoneno;
    this.email = email;
    this.address = address;
    this.Area = Area;
    this.city = city;
    this.pincode = pincode;
    this.Accountno = 10000000000;
    this.bal = bal;
  }
}
