import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../core/appService/books.service';
import { UsernameService } from '../core/appService/username.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


  user: string = ''
  constructor(private _book : BooksService, private router:Router, private _username:UsernameService) {
    this.hi = this._book.data
    this._username.finalUser.subscribe(uname => this.currentUser = uname)
    console.log('hi ->',this.user)
    
  }
   msg : string = '' ; 
   
   hi:{Book: string, Author : string, Quantity : number }[];
   
  currentUser:any;

  ngOnInit() {
    this._username.finalUser.subscribe(uname => {
      console.log('hello ->',uname)
      this.user = uname
      console.log(this.user);
    })
    this.msg = `Welcome, ${this.user}`;
    console.log(this.hi);
  }
  isFormHidden : boolean = true;


  BookHidden : boolean = true;
  addBook(book :any, author : any){
   this._book.addBook(book.value,author.value)
  }
  issuedBook : string = ""

  cancelBook() {
    this.isFormHidden = true;
  }
  viewBook(target : any) {
    console.log(target);
    
    this.router.navigate([`books/view/${target.innerHTML}`])
  }
}