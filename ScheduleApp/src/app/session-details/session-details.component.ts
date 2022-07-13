import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import { Schedule } from '../class/schedule'
import { HttpClient, HttpHeaders } from '@angular/common/http'



@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent implements OnInit {

   
  constructor(private _ScheduleService: ScheduleService,
    private http: HttpClient,
    ) { }

  listssessions : Schedule [] = [];
  // objcomments!: Schedule;

  ngOnInit(): void {
    this._ScheduleService.getSessions()
    .subscribe(
      data=>{
        this.listssessions=data
        console.log(data);
        
      }
    );
  
    
  }
  }

