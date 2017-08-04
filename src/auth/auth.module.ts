import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third-paty modules

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// shares modules
import { SharedModule } from './shared/shared.module'


export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' },
        ]
    }
]

export const firebaseConfig = {
    apiKey: "AIzaSyAO2bbzl_vDhgdjZSFJbEaxqSsvk3isJRE",
    authDomain: "fitness-app-d06d3.firebaseapp.com",
    databaseURL: "https://fitness-app-d06d3.firebaseio.com",
    projectId: "fitness-app-d06d3",
    storageBucket: "fitness-app-d06d3.appspot.com",
    messagingSenderId: "845668646572"
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ],
})
export class AuthModule { }