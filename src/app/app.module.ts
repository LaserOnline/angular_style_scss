import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scss01Component } from './components/scss01/scss01.component';
import { Scss02Component } from './components/scss02/scss02.component';
import { Scss03Component } from './components/scss03/scss03.component';

@NgModule({
  declarations: [
    AppComponent,
    Scss01Component,
    Scss02Component,
    Scss03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
