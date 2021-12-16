import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ForgetComponent } from './components/forget/forget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventsComponent } from './components/events/events.component';
import { FormsModule } from '@angular/forms';
// import {} from '.angular/material'




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ForgetComponent,
    EventsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
