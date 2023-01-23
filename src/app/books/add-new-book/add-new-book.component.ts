import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { canComponentDeactivate, canDeactivateGuard } from 'src/app/authGuard.service';
import { BooksService } from 'src/app/core/appService/books.service';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit, canComponentDeactivate {

  constructor(private _books:BooksService, private route : Router) { }

  ngOnInit() {
  }
  isFormHidden : boolean = true;
  cancelBook() {
    this.route.navigate(['books'])
  }
  book:string = ''
  author:string = ''
  addBook(book :any, author : any){
    this.bookAdd = `You added ${book}`
    this._books.addBook(book,author)
   }
   bookAdd : string = this._books.bookadd;

   goback(){
    this.route.navigate(['books'])
   }

   submitForm(form:NgForm){
    console.log(form)
    this.addBook(form.value.book,form.value.author)
    this.book = ""
    this.author = ""
   }

   canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {

    if((this.book.length !== 0 || this.author.length !== 0) ){

      return confirm("Do you want to discard the changes ?")

    }else{

      return true

    }
  }


   
}  
