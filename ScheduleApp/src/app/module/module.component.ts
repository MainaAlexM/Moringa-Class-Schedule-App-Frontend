import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { ScheduleService } from '../schedule.service';
import { TokenStorageService } from '../service/token-storage.service';

import { FormsModule }   from '@angular/forms';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  
  constructor(private service: ScheduleService, private router:Router, private tokenService:TokenStorageService) { }

  personalModules:any=[];
  profile:any=[];
  user_id:any;
  id:any;
  currentUser:any;
  module = {};


  ngOnInit(): void {

    //  Get Current User
    this.currentUser = this.tokenService.getUser();
    console.log(this.currentUser);
    this.id = this.currentUser.user_id;


    // Get Available Modules Posted by TM
      this.service.getMyModules(this.id)
        .subscribe(
          data=>{
            this.personalModules=data
          }
        );


      // Get tm_id from Profile
      this.service.getProfile(this.id)
      .subscribe(
        data=>{
          this.profile=data
        }
      );
    }

    // Submit Module Data
  submitData(value: any) {
    let body = {
      name: value.module,
      technical_mentor_id: this.id,
      profile_image:""
    }

    this.service.postModule(body)
      .subscribe(response => {
        console.log(response)
      });
    }

    reloadCurrentRoute() {
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/module', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });
  }
   
       }
      
  
