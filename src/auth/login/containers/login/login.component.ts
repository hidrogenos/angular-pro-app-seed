import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'login',
    styleUrls: ['login.component.scss'],
    template: `
        <div>
            <auth-form (submitted)="loginUser($event)">
                <h1>Login</h1>
                <a routerLink="/auth/register">Not Registered?</a>
                <button type="submit">
                    Login
                </button>
            </auth-form>
        </div>
    `
})
export class LoginComponent {
    constructor() {}

    loginUser(event: FormGroup){
        console.log(event.value);
    }
}