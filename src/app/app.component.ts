import { Component } from '@angular/core';

function log(target: any, name: any, descriptor: any){
  // console.log(target);
  // console.log(name);
  // console.log(descriptor);
  // console.log(descriptor.value);
  
  //temp stores the descriptor function which is defined under log i.e simpleMethod
  const temp = descriptor.value;
  temp();
  descriptor.value = function(...args: any){

    //?Take two arguments and store them into an array using destructuring
    
    console.log("Arguments", args, "were passed");
    const result = temp.apply(this, args)
    console.log("The result of the function is ", result);
    return result;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  constructor(){
     console.log("Generated using constructor",this.simpleMethod(5,4));
  }

  @log 
  simpleMethod(a: number,b: number){
    return a*b;
  }
}
