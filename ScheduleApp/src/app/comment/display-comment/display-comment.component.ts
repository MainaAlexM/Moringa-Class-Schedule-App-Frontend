import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { ScheduleService } from '../../schedule.service';
import { Schedule } from '../../class/schedule'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-display-comment',
  templateUrl: './display-comment.component.html',
  styleUrls: ['./display-comment.component.css']
})
export class DisplayCommentComponent implements OnInit {

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
        console.log(data);
        
      }
    );
  
    
  }

}

