import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/appService/books.service';
import { UsernameService } from 'src/app/core/appService/username.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _data : BooksService, private _user : UsernameService) { }

  ngOnInit() {
  }

}
