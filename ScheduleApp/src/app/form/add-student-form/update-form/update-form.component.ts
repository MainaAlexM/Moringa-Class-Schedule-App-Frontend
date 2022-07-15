import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/schedule.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  constructor(private service: ScheduleService) { }

  ngOnInit(): void {
    this.service.getSchedules()
      .subscribe(data => {
        console.log(data)
      })
  }
  updateData(value: any) {
    let body = {
      title: value.title,
      name: value.name,
      meet_url: value.meet_url,
      day: value.day,
      start: value.start,
      end: value.end,
      technical_mentor_id: value.technical_mentor_id,
      module_id: value.module_id,
      date_of_session: value.date_of_session
    }
    this.service.updateSchedules(body)
      .subscribe(response => {
        console.log(response)
      })
  }
}