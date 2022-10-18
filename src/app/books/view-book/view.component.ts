import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/core/appService/books.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  
  constructor(private route : ActivatedRoute, private _router : Router, private _books : BooksService) {
    this.hi = this._books.data
  }
  
  fetchBook(){
    this.book = this._books.getBook(this.paramId);
  }
  
  hi:{Book: string, Author : string}[];
  ngOnInit() {
    console.log('qqwdqwdqwdqw',this.hi);
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.paramId = id;
    this.fetchBook()
    console.log('books',this.book);
  }
  paramId : any;
  book: any;
  id:string = 'id';
  author:string = 'author'
  books:string = 'book'

  backBtn(){
    this._router.navigate(['./books'])
  }
}
