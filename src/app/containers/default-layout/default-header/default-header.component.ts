import { Component, Input, OnInit } from '@angular/core';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html'
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {

  username: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  roleUser: string = '';
  sharedVariable: number | undefined;
  @Input() sidebarId: string = 'sidebar';

  public newMessages = new Array(4);
  public newTasks = new Array(5);
  public newNotifications = new Array(5);

  constructor(private classToggler: ClassToggleService, private dataService: DataService) {
    super();
    this.dataService.sharedVariable$.subscribe((value) => {
      this.sharedVariable = value;
    });
  }

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userObject = JSON.parse(storedUser);
      this.username = userObject.username;
      this.password = userObject.password;
      this.firstName = userObject.firstName;
      this.lastName = userObject.lastName;
      this.roleUser = userObject.roleUser;
      const ordersLocal = localStorage.getItem('orders');
      const orders = ordersLocal != null ? JSON.parse(ordersLocal) : null;
      this.sharedVariable = orders.find((order: any) =>order.user.username==this.username).cart.length;
    }
  }

  onLinkClick() {
    //  localStorage.clear();
  }
}
