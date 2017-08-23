import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  //components
  declarations: [
    AppComponent,
    UserComponent
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
