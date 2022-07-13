import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  form: any = {
    name_:null,
    email:null,
    password:null,
    // password2:null,

  };


  isSuccessful =  false;
  isSignUpFailed = false;
  errorMessage = '';
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {name_, email, password} = this.form;
    console.log(this.form);
    
    this.authService.register(name_, email,password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(["/login"])
      },
      err => {
        this.errorMessage = err.error.message;
        console.log(err)
        // alert(err)
        this.isSignUpFailed = true
      });
  }

}
