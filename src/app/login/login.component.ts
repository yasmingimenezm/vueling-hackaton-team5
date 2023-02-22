import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataService } from '../shared/core/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public error: string = "";
  public token: string = "";

  constructor( private router: Router,
                private data: DataService,
                private fb: FormBuilder) { }


  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  required(field: string) {
    if(this.error != ''){
      return 
    }
    return this.loginForm.controls[field].errors && this.loginForm.controls[field].touched
  }


  ngOnInit(): void {

  }


  login(){
    if (this.loginForm.valid) {

      let userName = this.loginForm.value.username;
      let userPassword = this.loginForm.value.password;

      if (userName === 'admin' && userPassword === 'admin'){
        Swal.fire({
          icon: 'success',
          title: 'Welcome to Vueling',
          showConfirmButton: false,
          timer: 1500
        })
        this.data.userAuth(userName).subscribe(
          (data: any) => localStorage.setItem("token", data.token)
        );
        this.router.navigateByUrl('/datatable');
      } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            showConfirmButton: false,
            timer: 1500
          })
          this.loginForm.markAllAsTouched()
      }
    }
  }

}