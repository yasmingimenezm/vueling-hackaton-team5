import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  public token!: string | null;
  public userLogged: boolean = false;

  constructor(private router: Router){ }

  ngOnInit(): void {
    this.tokenExists();
  }

  userLogin() {
    this.tokenExists();
  }

  userLogout() {
    Swal.fire({
      icon: 'success',
      title: 'Goodbye',
      text: 'See you soon',
      showConfirmButton: false,
      timer: 1500
    });
    localStorage.removeItem('token');
    this.tokenExists();
  }

  tokenExists(){
    this.token = localStorage.getItem('token');
    if(this.token){
      this.userLogged = true;
    } else {
      this.userLogged = false;
    }
  }
  
  ngDoCheck(): void {
    this.tokenExists();
  }

}
