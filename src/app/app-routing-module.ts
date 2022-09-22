import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./authGuard.service";
import { booksModule } from "./books/books.module";
import { UserLoginComponent } from "./library/user-login/user-login.component";

const appRoutes : Routes = [
    {path :'', redirectTo : 'landingpage', pathMatch : "full" },
    {path:'login', component: UserLoginComponent},
    {path:'books', loadChildren: () =>  import('./books/books.module').then(a => a.booksModule)  }
  ]
@NgModule({
    imports :[
        RouterModule.forRoot(appRoutes)
    ]
})

export class appRoutingModule{}