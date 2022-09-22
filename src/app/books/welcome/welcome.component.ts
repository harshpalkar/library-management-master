import { Component, Input, OnInit } from '@angular/core';
import { UsernameService } from '../../core/appService/username.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private _userName : UsernameService)  {
    this._userName.finalUser.subscribe(uname =>
      this.username = uname
    )
   }

   username:string = '';

  ngOnInit() {
  }

   
}
