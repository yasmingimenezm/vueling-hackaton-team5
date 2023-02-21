import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public userLogged: boolean = false;

  userLogin() {
    this.userLogged = true;
  }

  userLogout() {
    this.userLogged = false;
  }

}
