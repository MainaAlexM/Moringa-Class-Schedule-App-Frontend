import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleService } from '../schedule.service';
import { Schedule } from '../class/schedule';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit{
  title = 'ScheduleApp';

  constructor(private service:ScheduleService) { }

  personalModules:any=[];

  ngOnInit(): void {
    this.service.getMyModules()
      .subscribe(
        data=>{
          this.personalModules=data
        }
      );
    }
  
  }

  