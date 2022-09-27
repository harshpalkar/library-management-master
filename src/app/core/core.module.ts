import { NgModule } from "@angular/core";
import { AuthGuard, canDeactivateGuard } from "../authGuard.service";
import { AuthServiceService } from "../authService.service";
import { BooksService } from "./appService/books.service";
import { UsernameService } from "./appService/username.service";

@NgModule({
        providers : [
            BooksService,
            UsernameService,
            AuthGuard,
            canDeactivateGuard,
            AuthServiceService
        ]
})

export class coreModule{}
