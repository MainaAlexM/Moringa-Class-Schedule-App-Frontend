import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-tm-profile',
  templateUrl: './tm-profile.component.html',
  styleUrls: ['./tm-profile.component.css']
})
export class TmProfileComponent implements  OnInit{
  title = 'ScheduleApp';

  constructor(private route : ActivatedRoute, private router: Router, private service:ScheduleService) { }

  profile:any=[];

  ngOnInit(): void {
    this.service.getProfile()
      .subscribe(
        data=>{
          this.profile=data
        }
      );
      }

      // this.profile.getProfile(this.route.snapshot.params['id']).subscribe((result:any)=>{
      //   console.log('result', result);
      //   this.profile = result.shows;
      //   console.log(this.profile);
      // })
    
    
      submitData(value: any) {
        let body = {
          email: value.email,
          name: value.name,
          profile_image: value.profile_image,
          bio: value.bio
        }

        this.service.updateProfile(body)
      .subscribe((response: any) => {
        console.log(response)
      })

    }
  }