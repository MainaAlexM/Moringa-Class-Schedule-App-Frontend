import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/form';
import { ScheduleService } from 'src/app/service/schedule.service';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private _ScheduleService: ScheduleService) { }

  ngOnInit(): void {
    this._ScheduleService.getSchedules()
      .subscribe(data => {
        console.log(data)
      })
  }
  submitData(value: any) {
    let body = {
      title: value.title,
      name: value.name,
      meet_url: value.meet_url,
      day: value.day,
      start: value.start,
      end: value.end,
      technical_mentor_id: value.technical_mentor_id,
      module_id: value.module_id,
      date_of_session:value.date_of_session
    }
    this._ScheduleService.addSchedules(body)
      .subscribe(response => {
        console.log(response)
      })
  }
}
