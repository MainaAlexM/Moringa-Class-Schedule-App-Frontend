import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
// import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {



  constructor(
    private http: HttpClient
  ) { }
 


  getComments(): Observable<any> {
    
    return this.http.get("https://scheduleizo.herokuapp.com/comments/")
   

}


}

