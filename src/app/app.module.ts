import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { UserLoginComponent } from './library/user-login/user-login.component';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { HeaderComponent } from './landingPage/header/header.component';
import { booksRoutingModule } from './books/books-routing-module';
import { appRoutingModule } from './app-routing-module';
import { landingpageRoutingModule } from './landingPage/landingpage-routing-module';
import { SharedModule } from './shared/shared.module';
import { coreModule } from './core/core.module';
import { booksModule } from './books/books.module';
import { AuthGuard, canDeactivateGuard } from './authGuard.service';
import { AuthServiceService } from './authService.service';


@NgModule({
  declarations: [												
    AppComponent,
      HeaderComponent,
      LibraryComponent,
      UserLoginComponent,
      LandingPageComponent,
      HeaderComponent
   ],
  imports: [
    BrowserModule,
    SharedModule,
    appRoutingModule,
    booksRoutingModule,
    landingpageRoutingModule,
    coreModule
  ],
  providers : [
    AuthGuard,
    canDeactivateGuard,
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
