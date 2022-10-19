import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { FormsModule } from '@angular/forms';
import { GetFPipe } from './header/getF.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SharedComponent ],
  exports :[
    FormsModule,
    CommonModule
  ]
})
export class SharedModule { }
