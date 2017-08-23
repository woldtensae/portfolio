import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  //components
  declarations: [
    AppComponent
  ],
  //Modules
  imports: [
    BrowserModule
  ],
  //services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
