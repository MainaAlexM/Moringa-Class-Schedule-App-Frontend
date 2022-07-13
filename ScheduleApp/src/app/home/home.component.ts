import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ScheduleService } from '../schedule.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit{
  title = 'ScheduleApp';

  constructor(private service:ScheduleService, private AuthService: TokenStorageService) { }

  personalModules:any=[];
  announcements:any=[];

  ngOnInit(): void {
    this.service.getMyModules()
      .subscribe(
        data=>{
          this.personalModules=data
        }
      );


      this.service.getAnnouncements()
      .subscribe(
        data=>{
          this.announcements=data
        }
      );

    }
  
  }
  
  