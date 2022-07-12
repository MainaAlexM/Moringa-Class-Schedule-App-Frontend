import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  
  constructor(private service: ScheduleService) { }

  ngOnInit(): void {
  }

  submitData(value: any) {
    let body = {
      name: value.name,
    }

    this.service.postModule(body)
      .subscribe(response => {
        console.log(response)
      })
  }

}
