import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public userLogged: boolean = false;

  userLogin() {
    this.userLogged = true;
    Swal.fire({
      icon: 'success',
      title: 'Welcome to Vueling',
      showConfirmButton: false,
      timer: 1500
    })
  }

  userLogout() {
    this.userLogged = false;
    Swal.fire({
      icon: 'success',
      title: 'Goodbye',
      text: 'See you soon',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
