import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UsernameService } from 'src/app/core/appService/username.service';
import { BooksService } from '../../core/appService/books.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  vis:boolean = false

  constructor(private _data : BooksService,private _user : UsernameService) {
    this.CurrentUser = ''
    this._data.visible.subscribe(val =>  this.vis = val )
    this._user.currentUser.subscribe(val => this.CurrentUser = val)
  } 

  ngOnInit() {
   
  }

  CurrentUser : string;



  
  logout(){
    this._data.currentLoggedIn.name = ""
    this._data.changeVisible()
    this._user.currentUser.next('')
  }
  user : String = this._data.currentLoggedIn.name;


  
}
