import { Component, OnInit, Input } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth.service';

const httpOptions = {
  headers:new HttpHeaders({ 'Content-Type': 'application/json'})
};
// const API_URL = 'http://127.0.0.1:8000/';
const API_URL = "http://funds-flow.herokuapp.com/";
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isLoggedIn = false;
  username?: string;
  isAuthenticated = false;
  is_staff = false;

  status?: boolean;
  userdetail: any;
  currentUser:any
  data:any
  is_donor?:boolean
  constructor(
    private tokenStorageService: TokenStorageService,
    public userService: UserService,
    private http:HttpClient
  ) { }

  ngOnInit(){
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
      this.isAuthenticated = true;
    }
    this.currentUser = this.tokenStorageService.getUser();
    return this.http.get(API_URL + 'users/' + this.currentUser.id + '/',httpOptions).subscribe(data => {
      this.data=data
    });

 
    
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  reloadPage(): void {
    window.location.reload();
  }
}
