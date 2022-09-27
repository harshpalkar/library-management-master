import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit  {
  title = 'my-first-project';

  constructor(){
     console.log('Constructor called');
  }
  ngOnchanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    console.log(changes);

  }
  ngOnInit(){
    console.log('ngOnInit called');
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('AfterContentInit called');
  }
  ngAfterContentChecked(){
    console.log('AfterContentChecked called');
  }

  ngAfterViewInit(){
    console.log('AfterViewInit called');
  }

  ngAfterViewChecked(){
    console.log('AfterViewChecked called');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}

