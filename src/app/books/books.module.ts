import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AddNewBookComponent } from "./add-new-book/add-new-book.component";
import { BooksComponent } from "./books.component";
import { IssueBookComponent } from "./issue-book/issue-book.component";
import { booksRoutingModule } from "./books-routing-module";

@NgModule({
    declarations : [
        BooksComponent,
        WelcomeComponent,
        AddNewBookComponent,
        IssueBookComponent
    ],
    imports : [FormsModule, CommonModule ,RouterModule, ReactiveFormsModule,booksRoutingModule],
    exports :[
        BooksComponent,
        WelcomeComponent
    ]
})


export class booksModule{}