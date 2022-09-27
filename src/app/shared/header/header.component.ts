import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BooksService } from '../../core/appService/books.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  vis:boolean = false

  constructor(private _data : BooksService) {
    this._data.visible.subscribe(val =>  this.vis = val )
  } 

  ngOnInit() {
   
  }




  
  logout(){
    this._data.currentLoggedIn.name = ""
    this._data.changeVisible()
  }




  
}
