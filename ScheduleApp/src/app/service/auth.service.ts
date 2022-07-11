import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


// const AUTH_API = "http://class-scheduleapp.herokuapp.com/";
const AUTH_API = 'http://127.0.0.1:8000/'
const httpOptions = {
  headers:new HttpHeaders({ 'Content-Type': 'application/json'})
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(email: string, password: string):Observable<any> {
    // return this.http.post(AUTH_API + 'signin/', {
      return this.http.post('http://127.0.0.1:8000/api/user/login/', {
      email,
      password
    }, httpOptions);
  }
  register(name: string, email:string,password: string,):Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/user/create/', {
      name,
      email,
      password,
      // password2,

    }, httpOptions);
  }

  registerCharity(name: string, email:string,user_type:string, password1: string,password2:string):Observable<any> {
    return this.http.post(AUTH_API + 'signup-charity/', {
      name,
      email,
      user_type,
      password1,
      password2,

    }, httpOptions);
  }

  registerAdmin(name: string, email:string,user_type:string,password1: string,password2:string):Observable<any> {
    return this.http.post(AUTH_API + 'signup-admin/', {
      name,
      email,
      user_type,
      password1,
      password2,

    }, httpOptions);
  }
}