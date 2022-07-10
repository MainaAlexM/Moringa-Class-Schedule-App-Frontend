import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { ScheduleService } from './schedule.service';
import { Schedule } from './class/schedule'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ScheduleApp';

  form:any={
    comment:null
  }    
  constructor(private _ScheduleService: ScheduleService,
    private http: HttpClient,
    ) { }

  listscomments : Schedule [] = [];
  objcomments!: Schedule;

  ngOnInit(): void {
    this._ScheduleService.getComments()
    .subscribe(
      data=>{
        this.listscomments=data
      }
    );
    // let comments=new Schedule();
    // comments.comment="You are the best",
    // comments.likes=1

    // this._ScheduleService.postComments(comments)
    // .subscribe(
    //   data=>{
    //     this.objcomments=data
    //   }
    // );
    
  }

  onSubmit(data:any){
    this.http.post("https://scheduleizo.herokuapp.com/comments/",data)
    console.log(data)
  }
  
}
