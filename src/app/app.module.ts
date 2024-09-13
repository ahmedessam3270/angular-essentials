import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { CardComponent } from "./shared/card/card.component";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent,CardComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, TasksComponent]
})
export class AppModule { }