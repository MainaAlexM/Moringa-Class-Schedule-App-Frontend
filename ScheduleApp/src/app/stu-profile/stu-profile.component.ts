import { Component, OnInit } from '@angular/core';
import { Schedule } from '../schedule';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-stu-profile',
  templateUrl: './stu-profile.component.html',
  styleUrls: ['./stu-profile.component.css']
})
export class StuProfileComponent implements OnInit {

  constructor(private service:ScheduleService) { }
  
  profile:any;
  user_id:any;
  
  ngOnInit(): void {
    this.service.getProfile(this.user_id)
    .subscribe(
      data=>{
        this.profile=data
        console.log(this.profile)
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