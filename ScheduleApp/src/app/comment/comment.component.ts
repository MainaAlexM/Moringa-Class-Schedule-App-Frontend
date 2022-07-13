import { Component, Input, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import { Schedule } from '../class/schedule'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {

  @Input()
  currentUserId!: string;

  title = 'ScheduleApp';
  form:any={
    id:null,
    student:null,
    comment:null,
    likes:null,
    created_at:null,
    session:null,
  } 

  isSuccessful =  false;
  errorMessage = '';

  listscomments : Schedule [] = [];
  objcomments!: Schedule;

  session_id:any=null
  constructor(private _ScheduleService: ScheduleService,
    private http: HttpClient,private router: Router,
    private activatedRoute: ActivatedRoute,private authservice:AuthService
    ) { }

    ngOnInit(): void {
    
      this._ScheduleService.getComments()
      .subscribe(
        data=>{
          this.listscomments=data
          console.log(data);
          
        }
      );
  
      this.activatedRoute.params.subscribe(params => {

        console.log(params);
        
        if (params['session_id']) {
          this.session_id = params['session_id'];
         
        }
      })
    
    }

  
  onSubmit(): void {
    const {id,student,comment,likes,session} = this.form;
    const user=this.authservice.getUser()
    if(user && user.user_id ){
      console.log(this.session_id);
      
      this._ScheduleService.postComment(id,user.user_id ,comment,likes,session,this.session_id).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.router.navigate([""])
        },
        err => {
          console.log(err)
          this.errorMessage = err.error.message;
          // alert(err)
         
        });
  
    }else{
      console.log("you must be locked in to comment")
    }
}
}
