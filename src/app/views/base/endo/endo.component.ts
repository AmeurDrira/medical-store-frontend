import { Component, OnInit } from '@angular/core';
import { CARTS_ENDO, QUANTITIES } from '../../../../assets/constants';
import {
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    CardImgDirective,
    CardTitleDirective, ColComponent, FormSelectDirective, RowComponent
} from '@coreui/angular';
import { NgForOf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardChartsData } from '../../dashboard/dashboard-charts-data';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-endo',
  standalone: true,
  imports: [
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    CardImgDirective,
    CardTitleDirective,
    ColComponent,
    FormSelectDirective,
    NgForOf,
    ReactiveFormsModule,
    RowComponent,
    FormsModule
  ],
  templateUrl: './endo.component.html',
  styleUrl: './endo.component.scss'
})
export class EndoComponent implements OnInit {
  constructor(private chartsData: DashboardChartsData,private dataService: DataService) {
  }

  quantities: number[] = QUANTITIES;
  carts: any[] = CARTS_ENDO;
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
