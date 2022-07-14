import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private ApiUrl = 'https://class-scheduleapp.herokuapp.com'
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }
  // get schedules
  getSchedules(): Observable<any[]> {
    return this.http.get<any[]>(this.ApiUrl + '/sessions/',
    { headers: this.httpHeaders });
    
  }
  // add schedules
  addSchedules(val: any): Observable<any>{
    return this.http.post(this.ApiUrl + '/sessions/', val,
    { headers: this.httpHeaders });
  }
  // update schedules
  updateSchedules(val: any): Observable<any> {
    return this.http.put(this.ApiUrl + '/sessions/', val,
    { headers: this.httpHeaders });
  }
  // delete schedules
  deleteSchedules(val: any): Observable<any> {
    return this.http.delete(this.ApiUrl + '/sessions/' + val,
    { headers: this.httpHeaders });
  }

  getModuleSessions(): Observable<any[]> {
    return this.http.get<any['1']>(`${this.ApiUrl}/api/module/1/sessions/`)
  }
  
}