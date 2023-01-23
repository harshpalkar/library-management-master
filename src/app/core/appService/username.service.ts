import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

constructor() { 
  
}


finalUser = new BehaviorSubject<string>('New User');
currentUser = new BehaviorSubject<string>('')

}
