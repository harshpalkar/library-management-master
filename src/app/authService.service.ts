import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLoggedIn : boolean = false;

  login(){
    this.isLoggedIn = true;
    
  }

    isAuthenticated(){
      const promise = new Promise(
        (resolve,reject) => {
          setTimeout(()=>{
            resolve(this.isLoggedIn);
          },500)
        }
        );
        return promise;
    }

  logout(){
    this.isLoggedIn = false;
  }

}
