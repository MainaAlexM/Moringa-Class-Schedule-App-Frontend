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

  constructor(private service:ScheduleService, private tokenService: TokenStorageService) { }

  currentUser:any;
  personalModules:any=[];
  announcements:any=[];
  theUser:any;
  name:any;
  id:any;
  email:any;
  user_type:any;
  user_id:any;

  ngOnInit(): void {
      //  Get Current User
      this.currentUser = this.tokenService.getUser();
      console.log(this.currentUser);
      this.id = this.currentUser.user_id;

      
    this.service.getMyModules(this.currentUser.user_id)
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