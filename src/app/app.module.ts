import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from './../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}


// var config = {
//     apiKey: "AIzaSyAO2bbzl_vDhgdjZSFJbEaxqSsvk3isJRE",
//     authDomain: "fitness-app-d06d3.firebaseapp.com",
//     databaseURL: "https://fitness-app-d06d3.firebaseio.com",
//     projectId: "fitness-app-d06d3",
//     storageBucket: "fitness-app-d06d3.appspot.com",
//     messagingSenderId: "845668646572"
//   };
