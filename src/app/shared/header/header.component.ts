import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UsernameService } from 'src/app/core/appService/username.service';
import { BooksService } from '../../core/appService/books.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  vis:boolean = false

  constructor(private _data : BooksService,private _user : UsernameService, private router:Router) {
    this.CurrentUser = ''
    this._data.visible.subscribe(val =>  this.vis = val )
    this._user.currentUser.subscribe(val => this.CurrentUser = val)
  } 

  ngOnInit() {
   
  }

  CurrentUser : string;


  logout(){
    if(confirm("Are you sure")){
      this._data.currentLoggedIn.name = ""
      this._data.changeVisible()
      this._user.currentUser.next('')
      this.router.navigate(["./landingpage"])
    }
  }
  
 
  user : String = this._data.currentLoggedIn.name;


  
}
