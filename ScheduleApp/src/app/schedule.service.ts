import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Schedule } from './class/schedule'
// import { environment } from 'src/environments/environment';


const httpOptions = {
  headers:new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

readonly APIurl = `https://class-scheduleapp.herokuapp.com`

  constructor(
    private http: HttpClient
  ) { }

postComment(id:string,student:string,comment: string,likes:string,session:string,session_id:any):Observable<any> {
  // return this.http.post(AUTH_API + 'signin/', {
    return this.http.post('http://127.0.0.1:8000/comments/', {
    comment,
    session:parseInt(session_id),
    student:parseInt(student)
  }, httpOptions).pipe(res=>res);
}


getComments(): Observable<any[]> {
  
  return this.http.get<any[]>(`http://127.0.0.1:8000/comments/`)
}

getSessions(): Observable<any[]> {
  
  return this.http.get<any[]>('http://127.0.0.1:8000/sessions/')
}


getModules(): Observable<any[]> {
    
  return this.http.get<any[]>(`${this.APIurl}/modules/`)
}

getProfile(): Observable<any[]> {
    
  return this.http.get<any['5']>(`${this.APIurl}/api/user/5/profile/`)
  // A method to get the user id and add it to the path as an argument (id)
}


// Post

postData(val: any){
  return this.http.post(`${this.APIurl}/post`, val)
}

// submitData(val: any){
//   return this.http.post(`${this.APIurl}/api/user/5/update/profile/`, val)
// }

updateProfile(val: any){
  return this.http.put<any['5']>(`${this.APIurl}/api/user/5/update/profile/`, val)
}



}



