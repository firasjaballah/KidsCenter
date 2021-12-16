import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ForgetComponent } from './components/forget/forget.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventsComponent } from './components/events/events.component';

// import {} from '.angular/material'





import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ForgetComponent,
    EventsComponent,
    
    ResultComponent,
    SearchComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     BrowserAnimationsModule,
     FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
