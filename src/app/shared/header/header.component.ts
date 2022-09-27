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
    this._data.visible.subscribe(val =>  this.vis = val )
  } 

  ngOnInit() {
   
  }




  
  logout(){
    this._data.currentLoggedIn.name = ""
    this._data.changeVisible()
  }
  user : String = this._data.currentLoggedIn.name;


  
}
