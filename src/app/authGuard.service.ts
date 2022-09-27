import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
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

//canComponentDeactivate always requires one method which should be present no matter what and that's canDeactivate()

export interface  canComponentDeactivate{
  canDeactivate : () => Observable<boolean> | Promise<boolean> | boolean;
}


export class canDeactivateGuard implements CanDeactivate<canComponentDeactivate>{
  canDeactivate(component : canComponentDeactivate, currentRoute : ActivatedRouteSnapshot, currentState : RouterStateSnapshot, nextState? : RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    return component.canDeactivate();
  }
}