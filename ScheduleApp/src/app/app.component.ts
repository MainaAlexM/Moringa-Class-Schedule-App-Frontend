import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { ScheduleService } from './schedule.service';
import { Schedule } from './class/schedule'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ScheduleApp';

  form:any={
    comment:null
  }    
  constructor(private service: ScheduleService,
    private http: HttpClient,
    ) { }

  listscomments : Schedule [] = [];
  objcomments!: Schedule;

  ModuleSessions:any=[]

  ngOnInit(): void {
    this.service.getComments()
    .subscribe(
      data=>{
        this.listscomments=data
      }
      
    );
    // console.log(this.listscomments)

    // Get Module Sessions
    this.service.getModuleSessions()
    .subscribe(
      data=>{
        this.ModuleSessions=data
      }
    );
    
  }
  
}


