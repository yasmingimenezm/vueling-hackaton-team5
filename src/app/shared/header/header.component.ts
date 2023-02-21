import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {

  public userLogged: boolean = false;

  constructor(private router: Router){ }

  userLogin() {
  }

  userLogout() {
    Swal.fire({
      icon: 'success',
      title: 'Goodbye',
      text: 'See you soon',
      showConfirmButton: false,
      timer: 1500
    })
  }

  ngOnChanges(): void {
    if(this.router.url === '/datatable') {
      this.userLogged = true;
      console.log('change!');
    }    
  }

}
