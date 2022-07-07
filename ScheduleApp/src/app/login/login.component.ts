import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  data: any;
  private req: any;
  url: string = 'https://scheduleizo.herokuapp.com/api/user/login/'
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.req = this.http.get(this.url).subscribe(data => {
      this.data = data;
    })
  }

}
