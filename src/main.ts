//It will allow our application to run well on web platform. platformBrowserDynamic is a function
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { AppModule } from "./app/app.module"







//platformBrowserDynamic is a function which itself has many methods which can be chained on it.
//bootsrapModule is a method to which we should pass a module stating that from here load all other files of the application.
platformBrowserDynamic().bootstrapModule(AppModule)
//Now everything will start from this AppModule