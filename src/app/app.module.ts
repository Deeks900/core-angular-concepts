//NgModule is helpful in making a module.
import { NgModule } from "@angular/core"
//BrowserModule because this application is browser based
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component"
import { CardComponent } from "./card.component"



//Decorating our class with module/method
@NgModule({
    //mention all the things you are bringing from core angular
    imports: [BrowserModule],
    //Mention all the components inside this module.Angular handles itself
    declarations: [AppComponent, CardComponent],
    //Bootstrap clarifies that which component you want to load first from this module.
    bootstrap: [AppComponent],
})
//It's a class and we can give any name to thic class
export class AppModule {}