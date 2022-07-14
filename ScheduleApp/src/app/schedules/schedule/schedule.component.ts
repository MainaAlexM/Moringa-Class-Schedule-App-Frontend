import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/schedule.service';
import { Schedule } from 'src/app/schedule';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private service: ScheduleService) { }

  sessions: Schedule[] = [];
  ngOnInit(): void {
    this.service.getSchedules()
      .subscribe(
        data => {
          this.sessions = data
        }
      );
  }

}
