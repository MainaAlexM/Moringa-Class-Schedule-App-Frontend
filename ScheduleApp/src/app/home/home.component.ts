import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  private req: any;
  url: string = 'https://scheduleizo.herokuapp.com/modules/'
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.req = this.http.get(this.url).subscribe(data => {
      this.data = data;
    })
  }

}
