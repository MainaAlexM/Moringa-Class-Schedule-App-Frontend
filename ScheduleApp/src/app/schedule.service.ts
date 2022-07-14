import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Schedule } from './class/schedule'
// import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

private APIurl = `https://class-scheduleapp.herokuapp.com`

user_id:any;
module_id:any;

  constructor(private http: HttpClient) { }

  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});


  // get schedules
  getSchedules(): Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/sessions/',
    { headers: this.httpHeaders });
    
  }
  // add schedules
  addSchedules(val: any): Observable<any>{
    return this.http.post(this.APIurl + '/sessions/', val,
    { headers: this.httpHeaders });
  }
  // update schedules
  updateSchedules(val: any): Observable<any> {
    return this.http.put(this.APIurl + '/sessions/', val,
    { headers: this.httpHeaders });
  }
  // delete schedules
  deleteSchedules(val: any): Observable<any> {
    return this.http.delete(this.APIurl + '/sessions/' + val,
    { headers: this.httpHeaders });
  }
  
//  Get all Comments
getComments(): Observable<any[]> {
  
  return this.http.get<any[]>(`${this.APIurl}/comments/`)
}

// Get all Modules
getModules(): Observable<any[]> {
    
  return this.http.get<any[]>(`${this.APIurl}/modules/`)
}

// Get a Profile
getProfile(user_id:any){
    
  return this.http.get(`${this.APIurl}/api/user/${user_id}/profile/`)
  // Needs a method to get the user id and add it to the path as an argument (id)
}

  // Get My modules based on Profile
getMyModules(user_id:any){
    
  return this.http.get(`${this.APIurl}/api/technical-mentor/${user_id}/modules/`)
}

// Get Student modules
getStudentModules(user_id:any){
    
  return this.http.get(`${this.APIurl}/api/technical-mentor/${user_id}/modules/`)
}

// Post a Module
postModule(val: any): Observable<any>{
  return this.http.post(`${this.APIurl}/modules/`, val,
  { headers: this.httpHeaders });
}

// Update Profile
updateProfile(data:any): Observable<any[]> {
  return this.http.put<any['5']>(`${this.APIurl}/api/user/5/update/profile/`, data)
}


getModuleSessions(){
    
  return this.http.get(`${this.APIurl}/api/module/${this.module_id}/sessions/`)
}

// Get announcements
getAnnouncements(): Observable<any[]> {
    
  return this.http.get<any[]>(`${this.APIurl}/api/announcements/`)
}

  // Get Alll students
  getAllStudents(): Observable<any>{
    
    return this.http.get(`${this.APIurl}/api/students`)
  }


// Add a new Student to a Module                                          
addStudent(module_id: any, student_id:any): Observable<any>{
  return this.http.post(`${this.APIurl}/api/module/${module_id}/student/${student_id}/`,
  { headers: this.httpHeaders });
}


}


