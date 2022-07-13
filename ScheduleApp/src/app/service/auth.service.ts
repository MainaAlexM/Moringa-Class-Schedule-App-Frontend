import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


// const AUTH_API = "http://class-scheduleapp.herokuapp.com/";
// const AUTH_API = 'http://127.0.0.1:8000/'
const httpOptions = {
  headers:new HttpHeaders({ 'Content-Type': 'application/json'})
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router:Router) { }
  login(email: string, password: string) {
    // return this.http.post(AUTH_API + 'signin/', {
      this.http.post('http://127.0.0.1:8000/api/user/login/', {
      email,
      password
    }, httpOptions).subscribe(res=>{
      console.log(res);
      
      window.localStorage.setItem('auth_user',JSON.stringify(res))
      this.router.navigate(["/"])
    })
  }
  register(name: string, email:string,password: string,):Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/user/create/', {
      name,
      email,
      password,
      // password2,

    }, httpOptions);
  }
 
  getUser():any{
    const localStorage=window.localStorage
  console.log(localStorage.getItem("auth_user"));
  
    if (localStorage.getItem("auth_user")){
      let user=localStorage.getItem("auth_user")
      return JSON.parse(user || "{}")
    }
    else{
      return null
    }
  }
  getLoginStatus():boolean{
    console.log(this.getUser())
    return this.getUser() ? true : false
  }

  logOut():void{
    window.localStorage.removeItem('auth_user')
    this.router.navigate(["/login"])
  }
}