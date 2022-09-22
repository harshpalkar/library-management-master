import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './authService.service';
import { BooksService } from './core/appService/books.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean
  {
     return this._book.checkStatus().then(
      (authenticated) => {
        if(authenticated){
          return true;
        }else{
          this.router.navigate(['./books'])
          alert("You are not an admin")
          return false
        }
      }
    )   
  }


constructor(private _authService : AuthServiceService, private router : Router, private _book:BooksService) {

 }

}
