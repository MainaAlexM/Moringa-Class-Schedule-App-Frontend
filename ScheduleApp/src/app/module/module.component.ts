import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { ScheduleService } from '../schedule.service';
562

import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  
  constructor(private service: ScheduleService) { }

  personalModules:any=[];
  profile:any=[];

  ngOnInit(): void {

    // Get Available Modules Posted by TM
      this.service.getMyModules()
        .subscribe(
          data=>{
            this.personalModules=data
          }
        );


      // Get tm_id from Profile
      this.service.getProfile()
      .subscribe(
        data=>{
          this.profile=data
        }
      );
    }

    // Submit Module Data
  submitData(value: any) {
    let body = {
      name: value.name,
      technical_mentor_id: this.profile.technical_mentor.pk
    }

    this.service.postModule(body)
      .subscribe(response => {
        console.log(response)
      })
  }
// get the current user's id and pass it to the post module

}
