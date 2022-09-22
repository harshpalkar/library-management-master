import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landingPage.component";
    const landingPageRoute : Routes =[
        {path:'landingpage', component : LandingPageComponent},
    ]
@NgModule({
    imports : [
        RouterModule.forChild(landingPageRoute)
    ],
    exports :[
        RouterModule
    ]
})
export class landingpageRoutingModule{}