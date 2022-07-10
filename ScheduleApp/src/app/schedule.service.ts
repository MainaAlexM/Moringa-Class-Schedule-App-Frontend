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
    
  return this.http.get<any[]>(`${this.APIurl}/api/user/4/ profile/`)
}


// Post

postData(val: any){
  return this.http.post(`${this.APIurl}/post`, val)
}




}

