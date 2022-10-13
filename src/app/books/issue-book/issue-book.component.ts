import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/core/appService/books.service';
import { UsernameService } from 'src/app/core/appService/username.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {
  router: any;
  hi: { Book: string; Author: string; Quantity: number; }[];

  constructor(private _book : BooksService, private _route : Router, private _username : UsernameService) { 
    this.hi = this._book.data
  }

  ngOnInit() {
  }

  issuedBook : string = "";
  isFormHidden : boolean = true;
  currentUser : any;
  
  onSubmit(myform : NgForm){
    if(this._username.finalUser && this._book.currentLoggedIn.name.length === 0 ){
      alert("Please Log in First")
      this.router.navigate(['/eventBind'])
    }else{
      console.log(myform.value);
      if(myform.value.Book.length > 0){
        this._book.onSubmit(myform.value.Book);
        this._route.navigate(['./books'])
      }else{
        alert('Please select a book')
      }

      // this.temp.push(myform.value)
      // console.log(this.temp);
      console.log('books ->',this._book.userData)
    }
  }
  newBook(){
    
    this.isFormHidden = false;
  }
  returnBook(myform : NgForm){
    this._book.returnBook()
  }
  goback(){
    this._route.navigate(['books'])
   }

}
