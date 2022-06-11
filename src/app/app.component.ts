import { WeekDay } from "@angular/common";
import {Component} from "@angular/core"

@Component({
    selector: "my-app-main",
    // This is one way.Here you have to write all the HTML here
    // template: `<h1>Hey Angular</h1>`,
    // This is a better WeekDay.Here we will write all the HTML in a separate File.
    templateUrl: "./app.component.html",

    // This way you have to write all css in this file only
    // styles: [`
    // h1{
    //     background-color: #FFF;
    // }
    // `]

    //This is more better way to write css for this component
    //Angular believes that a component can have multiple css files so we are having an array here
    styleUrls: ["./app.component.css"],
})
export class AppComponent {}