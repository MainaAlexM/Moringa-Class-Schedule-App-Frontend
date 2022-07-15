import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLoggedIn = false;
  name?: string;
  isAuthenticated = false;
  is_TM = false;
  is_STU = false;

  status?: boolean;
  userdetail: any;
  currentUser:any
  data:any
  id:any;
  // is_TM?:boolean
  constructor(
    private tokenStorageService: TokenStorageService,
    public userService: UserService,
    private http:HttpClient
  ) { }

  ngOnInit(){

    //  Get Current User
    this.currentUser = this.tokenStorageService.getUser();
    console.log(this.currentUser);
    this.id = this.currentUser.user_id;
    

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.name = user.name;
      this.isAuthenticated = true;
    }
    // this.currentUser = this.tokenStorageService.getUser();
    // return this.http.get(`${API_URL}/api/user/current/`,httpOptions).subscribe(data => {
    //   this.data=data
    // });

    
  }
}
