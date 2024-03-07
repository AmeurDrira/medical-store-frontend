import { Component, OnInit } from '@angular/core';
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
import { CARTS_DENTISTERIA, QUANTITIES } from '../../../../assets/constants';

@Component({
  selector: 'app-dentisteria',
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
  templateUrl: './dentisteria.component.html',
  styleUrl: './dentisteria.component.scss'
})
export class DentisteriaComponent implements OnInit {
  constructor(private chartsData: DashboardChartsData,private dataService: DataService) {
  }

  quantities: number[] = QUANTITIES;
  carts: any[] = CARTS_DENTISTERIA;
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
