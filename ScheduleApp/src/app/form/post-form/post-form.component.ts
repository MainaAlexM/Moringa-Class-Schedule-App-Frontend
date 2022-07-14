import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/form';
import { ScheduleService } from 'src/app/schedule.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  currentUser:any;
  user_id:any;
  id:any;
  personalModules:any;
  selectedModule:any;

  constructor(private tokenService:TokenStorageService, private service:ScheduleService) { }

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

    this.service.getSchedules()
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
      technical_mentor_id: this.currentUser.user_id,
      module_id:this.selectedModule,
      date_of_session:value.date_of_session
    }
    this.service.addSchedules(body)
      .subscribe(response => {
        console.log(response)
      });

      console.log(this.selectedModule)
  }
}
