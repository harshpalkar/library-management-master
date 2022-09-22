import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landingPage.component";

@NgModule({
    declarations :[
        LandingPageComponent
    ],
    imports :[
        CommonModule,
        RouterModule,
    ],
    exports :[
        LandingPageComponent,
    ]
})
export class landingPageModule{}
