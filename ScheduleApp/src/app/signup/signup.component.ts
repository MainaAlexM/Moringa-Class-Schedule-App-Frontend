import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  data: any;
  private req: any;
  url: string = 'https://scheduleizo.herokuapp.com/api/user/create/'
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.req = this.http.get(this.url).subscribe(data => {
      this.data = data;
    })
  }

}