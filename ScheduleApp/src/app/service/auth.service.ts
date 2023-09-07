import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const APIurl = "http://127.0.0.1:8000/?format=openapi";
const httpOptions = {
  headers:new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(email: string, password: string):Observable<any> {
    // return this.http.post(APIurl + 'signin/', {
      return this.http.post(`${APIurl}/api/user/login/`, {
      email,
      password
    }, httpOptions);
  }
  register(username: string, email:string, password: string):Observable<any> {
    return this.http.post(`${APIurl}/api/user/create/`, {
      name:username,
      email,
      password,
    }, httpOptions);
  }


}
