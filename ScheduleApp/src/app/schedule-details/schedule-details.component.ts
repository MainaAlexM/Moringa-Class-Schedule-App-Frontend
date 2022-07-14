import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/service/schedule.service';
import { Schedule } from 'src/app/schedule';
@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})
export class ScheduleDetailsComponent implements OnInit {
  ModuleSessions:any=[]
  constructor(private _ScheduleService: ScheduleService) { }
  sessions: any = [];
  ngOnInit(): void {
    this._ScheduleService.getModuleSessions()
      .subscribe(
        data => {
          this.ModuleSessions = data
        }
      );
  }
}
