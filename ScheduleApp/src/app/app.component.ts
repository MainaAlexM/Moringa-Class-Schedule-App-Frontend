import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { ScheduleService } from './schedule.service';
import { Schedule } from './class/schedule'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ScheduleApp';
    
  constructor(private _ScheduleService: ScheduleService) { }

  listscomments: Schedule [] = [];
  ngOnInit(): void {
    this._ScheduleService.getComments()
    .subscribe(
      data=>{
        this.listscomments=data
      }
    );
    
    
  }
  
}
