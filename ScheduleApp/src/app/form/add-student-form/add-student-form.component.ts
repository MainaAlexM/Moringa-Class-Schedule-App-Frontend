import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})
export class AddStudentFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

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


}
