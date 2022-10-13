import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { UserLoginComponent } from './library/user-login/user-login.component';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { HeaderComponent } from './shared/header/header.component';
import { booksRoutingModule } from './books/books-routing-module';
import { appRoutingModule } from './app-routing-module';
import { landingpageRoutingModule } from './landingPage/landingpage-routing-module';
import { SharedModule } from './shared/shared.module';
import { coreModule } from './core/core.module';
import { LogoutComponent } from './shared/header/logout/logout.component';


@NgModule({
  declarations: [													
    AppComponent,
      HeaderComponent,
      LibraryComponent,
      UserLoginComponent,
      LandingPageComponent,
      HeaderComponent,
      LogoutComponent
   ],
  imports: [
    BrowserModule,
    SharedModule,
    appRoutingModule,
    booksRoutingModule,
    landingpageRoutingModule,
    coreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
