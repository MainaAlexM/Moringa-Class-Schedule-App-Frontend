import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-tm-profile',
  templateUrl: './tm-profile.component.html',
  styleUrls: ['./tm-profile.component.css']
})
export class TmProfileComponent implements  OnInit{
  title = 'ScheduleApp';

  private APIurl = `https://class-scheduleapp.herokuapp.com`

  constructor(private route : ActivatedRoute, private router: Router, private service:ScheduleService, private tokenService:TokenStorageService) { }

  profile:any=[];
  currentUser:any;
  id:any;
  user_id:any;


  ngOnInit(): void {
          //  Get Current User
  this.currentUser = this.tokenService.getUser();
  console.log(this.currentUser);
  this.id = this.currentUser.user_id;
  console.log(this.id);
  
    this.service.getProfile(this.currentUser.user_id)
      .subscribe(
        data=>{
          this.profile=data
        }
      );

      }

      submitData(value: any) {
        let body = {
          email: value.email,
          name: value.name,
          profile_image: value.profile_image,
          bio: value.bio,
          user_id:this.id
        }

        this.service.updateProfile(body)
      .subscribe((response: any) => {
        console.log(response)
      })

    }
  }