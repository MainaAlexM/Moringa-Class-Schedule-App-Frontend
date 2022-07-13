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

private APIurl = `https://class-scheduleapp.herokuapp.com`

postComment(id:string,student:string,comment: string,likes:string,session:string,session_id:any):Observable<any> {
  // return this.http.post(AUTH_API + 'signin/', {
    return this.http.post('http://127.0.0.1:8000/comments/', {
    comment,
    session:parseInt(session_id),
    student:parseInt(student)
  }, httpOptions).pipe(res=>res);
}

  constructor(private http: HttpClient) { }

//  Get all Comments
getComments(): Observable<any[]> {
  
  return this.http.get<any[]>(`http://127.0.0.1:8000/comments/`)
}

getSessions(): Observable<any[]> {
  
  return this.http.get<any[]>('http://127.0.0.1:8000/sessions/')
}


getModules(): Observable<any[]> {
    
  return this.http.get<any[]>(`${this.APIurl}/modules/`)
}

// Get a Profile
getProfile(): Observable<any[]> {
    
  return this.http.get<any['5']>(`${this.APIurl}/api/user/5/profile/`)
  // Needs a method to get the user id and add it to the path as an argument (id)
}

  // Get My modules based on Profile
getMyModules(): Observable<any[]> {
    
  return this.http.get<any['4']>(`${this.APIurl}/api/technical-mentor/4/modules/`)
}

// Post a Module
postModule(data: any): Observable<any[]> {
  return this.http.post<any[]>(`${this.APIurl}/modules/`, data)
}

// Update Profile
updateProfile(data: any): Observable<any[]> {
  return this.http.put<any[]>(`${this.APIurl}/api/user/5/update/profile/`, data)
}


getModuleSessions(): Observable<any[]> {
    
  return this.http.get<any['1']>(`${this.APIurl}/api/module/1/sessions/`)
}

// Get announcements
getAnnouncements(): Observable<any[]> {
    
  return this.http.get<any[]>(`${this.APIurl}/api/announcements/`)
}

}



