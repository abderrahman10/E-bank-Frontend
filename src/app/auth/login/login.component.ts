import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  LoginForm!: FormGroup;
  invalidCredentials: boolean= false;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){
    this.createForm();
  }


  createForm() {
    this.LoginForm = this.fb.group({
      email:['',  Validators.required],
      password:['', Validators.required],
    });
  }

  login() {
    console.log("form value:", this.LoginForm.value);
    if(this.LoginForm.valid) {
      this.isLoading = true;
       this.authService.login( this.LoginForm.value).subscribe( (res) => {
        console.log(res); 
        this.router.navigate(['/user/dashboard']);
      },
      (error) => {
        this.isLoading = false;
        this.invalidCredentials =true;
       console.log(error);
      });
    }
    }




}
