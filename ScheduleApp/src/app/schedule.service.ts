import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
// import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

readonly APIurl = `https://class-scheduleapp.herokuapp.com`

  constructor(
    private http: HttpClient
  ) { }



getComments(): Observable<any[]> {
  
  return this.http.get<any[]>(`${this.APIurl}/comments/`)
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

