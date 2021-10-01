import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListsComponent } from './user-lists/user-lists.component';
import { StudentListsComponent } from './student-lists/student-lists.component';
import { CountryListsComponent } from './country-lists/country-lists.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListsComponent,
    StudentListsComponent,
    CountryListsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
