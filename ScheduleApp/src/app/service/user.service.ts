import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { AuthService } from 'src/app/service/auth.service';

const httpOptions = {
  headers:new HttpHeaders({ 'Content-Type': 'application/json'})
};
// const API_URL = 'http://127.0.0.1:8000/';
const API_URL= "http://127.0.0.1:8000/?format=openapi";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser:any
  data:any
  constructor(private http: HttpClient, private tokenStorageService:TokenStorageService) { }
  
  public getLoggedInUser(){
    this.currentUser = this.tokenStorageService.getUser();
    return this.http.get(`${API_URL}/api/user/${this.currentUser.pk}/`,httpOptions).subscribe(data => {
      // console.log(data)
      this.data=data
    })
  }
}
