import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/core/appService/books.service';
import { BooksComponent } from '../books.component';
import { booksModule } from '../books.module';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

  constructor(private _books:BooksService, private route : Router) { }

  ngOnInit() {
  }
  isFormHidden : boolean = true;
  cancelBook() {
    this.route.navigate(['books'])
  }
  addBook(book :any, author : any){
    this.bookAdd = `You added ${book.value}`
    this._books.addBook(book.value,author.value)
   }
   bookAdd : string = this._books.bookadd;
}
