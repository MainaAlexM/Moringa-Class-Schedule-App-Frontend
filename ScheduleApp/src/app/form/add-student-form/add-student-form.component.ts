import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ScheduleService } from 'src/app/schedule.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})
export class AddStudentFormComponent implements OnInit {

  constructor(private http: HttpClient, private tokenservice: TokenStorageService, private service:ScheduleService) { }

  personalModules:any=[];
  id:any;
  currentUser:any;
  allStudents:any;

  ngOnInit(): void {

    //  Get Current User
    this.currentUser = this.tokenservice.getUser();
    console.log(this.currentUser);
    this.id = this.currentUser.user_id;


    // Get Available Modules Posted by TM
    this.service.getMyModules(this.id)
    .subscribe(
      data=>{
        this.personalModules=data
      }
    );


      // Get All Students
    this.service.getAllStudents().subscribe(
      data=>{
        this.allStudents=data
        console.log(this.allStudents)

      });

      // addStudent(form:NgForm) {
        
    
      //   this.service.addStudent()
      //     .subscribe(response => {
      //       console.log(response)
      //     });
      //   }
    
  }
}