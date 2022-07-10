import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';


@Component({
  selector: 'app-tm-profile',
  templateUrl: './tm-profile.component.html',
  styleUrls: ['./tm-profile.component.css']
})
export class TmProfileComponent implements  OnInit{
  title = 'ScheduleApp';

  constructor(private service:ScheduleService) { }

  profileInfo:any=[];

  ngOnInit(): void {
    this.service.getProfile()
      .subscribe(
        data=>{
          this.profileInfo=data
        }
      );
    }
}
