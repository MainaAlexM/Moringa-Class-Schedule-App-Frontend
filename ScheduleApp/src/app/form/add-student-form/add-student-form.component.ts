import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduleService } from 'src/app/schedule.service';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})
export class AddStudentFormComponent implements OnInit {

  constructor(private http: HttpClient, private service:ScheduleService) { }

  personalModules:any=[];

  ngOnInit(): void {
    // Get Available Modules Posted by TM
    this.service.getMyModules()
    .subscribe(
      data=>{
        this.personalModules=data
      }
    );

    }


    // submitData(value: any) {
    //   let body = {
    //     name: value.name,
    //     age: value.age
    //   }
  
    //   this.userService.postData(body)
    //     .subscribe(response => {
    //       console.log(response)
    //     })
    // }

  }
