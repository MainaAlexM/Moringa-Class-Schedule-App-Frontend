import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/service/schedule.service';
import { Schedule } from 'src/app/schedule';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private _ScheduleService: ScheduleService) { }

  sessions: Schedule[] = [];
  ngOnInit(): void {
    this._ScheduleService.getSchedules()
      .subscribe(
        data => {
          this.sessions = data
        }
      );
  }

}
