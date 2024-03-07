import { Component, OnInit } from '@angular/core';
import { CARTS, QUANTITIES } from '../../../assets/constants';
import { DataService } from '../../data.service';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private dataService: DataService) {
  }

  quantities: number[] = QUANTITIES;
  carts: any[] = CARTS;
  userObject: any;

  username: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';


  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.userObject = JSON.parse(storedUser);
      this.username = this.userObject.username;
      this.password = this.userObject.password;
      this.firstName = this.userObject.firstName;
      this.lastName = this.userObject.lastName;
    }
  }


  addToCard() {
    console.log('addToCard');
    console.log(this.carts);

    const cartForOrder = this.carts.filter(x => x.quantity >0);
    console.log(cartForOrder)
    console.log(cartForOrder.length)
    this.updateSharedVariable(cartForOrder.length);
    cartForOrder.forEach(card => console.log(card));
    const orders = [{date: Date.now(), user: this.userObject, cart: cartForOrder}];

    localStorage.setItem('orders', JSON.stringify(orders));
  }

  updateSharedVariable(value: number): void {
    this.dataService.setSharedVariable(value);
  }
}
