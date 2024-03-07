import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { USERS } from '../../../../assets/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  validUserPassword: boolean = false;
  users=USERS;

  constructor(private router: Router) {
  }

  onSave() {
    console.log(`Username: ${this.username}, Password: ${this.password}`);

    const userObject = {username: this.username, password: this.password};
    const result = this.users.find((user) =>
      user.username == this.username && user.password == this.password);
    if (result != null) {
      localStorage.setItem('user', JSON.stringify(result));
      if(result.roleUser=="doctor"){
        this.router.navigate(['/dashboard']);
      }else {
        this.router.navigate(['/dashboard']);
      }

    } else {
      this.validUserPassword = true;
    }

  }
}
