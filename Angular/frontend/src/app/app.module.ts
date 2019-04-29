import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Choix1Component } from './components/choix1/choix1.component';
import { Choix2Component } from './components/choix2/choix2.component';

@NgModule({
  declarations: [
    AppComponent,
    Choix1Component,
    Choix2Component
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
