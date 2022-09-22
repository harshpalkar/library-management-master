import { NgModule } from "@angular/core";
import { BooksService } from "./appService/books.service";
import { UsernameService } from "./appService/username.service";

@NgModule({
        providers : [
            BooksService,
            UsernameService
        ]
})

export class coreModule{}
