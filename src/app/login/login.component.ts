import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/core/login.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

error : string = "";



  constructor( private router: Router,
               private authservice: LoginService,
               private fb:FormBuilder) { }


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
  console.log(this.loginForm.value);
  
  if (this.loginForm.valid){
    
    const { username, password } = this.loginForm.value
    
    this.authservice.login( username, password )
    .subscribe( ok => {
      
      if( ok === true ){
        this.router.navigateByUrl(`/${this.authservice.usuario.rol}`)
        Swal.fire({
          icon: 'success',
          title: 'Welcome to Vueling',
          showConfirmButton: false,
          timer: 1500
        })
      } else {

        this.error = ok;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          showConfirmButton: false,
          timer: 1500
        })
        this.loginForm.markAllAsTouched()
      }
    })}

}

}