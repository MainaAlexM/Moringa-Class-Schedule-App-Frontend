import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email:null,
    password:null,
  };

  isLoggedIn =  false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.authService.getLoginStatus()
    if(this.isLoggedIn){
      this.router.navigate(['/'])
    }
  }
  onSubmit(): void {
    const {email, password} = this.form;
    this.authService.login(email, password)
    this.ngOnInit()
  }



}
