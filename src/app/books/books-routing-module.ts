import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard, canDeactivateGuard } from "../authGuard.service";
import { AddNewBookComponent } from "./add-new-book/add-new-book.component";
import { BooksComponent } from "./books.component";
import { IssueBookComponent } from "./issue-book/issue-book.component";
import { ViewComponent } from "./view-book/view.component";

const bookRoute : Routes = [
   {path:'', children:[
    {path:'',component:BooksComponent},
    {path:'add',  canActivate : [AuthGuard], canDeactivate : [canDeactivateGuard], component:AddNewBookComponent},
    {path:'issue',component:IssueBookComponent},
    {path : 'view/:id', component : ViewComponent}
   ]}
]

@NgModule({
    imports : [
        RouterModule.forChild(bookRoute)
    ],
    exports: [
        RouterModule
    ]
    
})

export class booksRoutingModule{}