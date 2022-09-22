import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BooksService } from 'src/app/core/appService/books.service';
import { UsernameService } from 'src/app/core/appService/username.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private _book : BooksService, private _userName : UsernameService ) {
    this.users = this._book.userData
   }

   users:{Name: string, Issued : string[] }[];

  ngOnInit() {
    if(this._book.currentLoggedIn.name.length > 0){
      this.set(this._book.currentLoggedIn.name)
      this.isHidden = true
    }
    console.log(this.users);

  }

  isHidden : boolean = false;
  isDisabled : boolean = true;
  BookHidden : boolean = true;
  isValid : boolean = false;
  msg:string = "";
  issued : string = ""
  user:string =  ""


  set(name:string){
    if(name === ""){
      this.isValid = true;
      this.msg = ""
    }else{
      const temp = this.users.filter((item)=> item.Name === name);
      if(temp.length === 0){
        const newUser =  {
          Name : name,
          Issued : []
      }
      this.users.push(newUser);
      console.log(newUser);
      console.log(this.users);
      }else{
        this.users.map((item)=> {
          if(item.Name === name){
            console.log(item);
          }
        })
      }
      this.msg = `Welcome, ${name}`
      this.issued = 'Your already issued books'
      this.user = name
      this.BookHidden = false;
      this._book.currentLoggedIn.name = name
      this.isDisabled = false;
  }

  }

  hi(val:any){
    this.set(val.value)
    this._userName.finalUser.next(val.value)
    this._book.changeVisible()
  }
  thisFunction(){
    this.isHidden = true;
    this.isValid = false;
  }
  isTableHidden : boolean = true;
  book : string = ""
  bookValue:string  = " "
  author:string = "";
   
}
