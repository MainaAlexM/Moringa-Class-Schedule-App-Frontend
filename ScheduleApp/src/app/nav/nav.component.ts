import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user:any=null
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.user=this.authService.getUser()
  }
logOut():void{
  this.authService.logOut()
}
}
