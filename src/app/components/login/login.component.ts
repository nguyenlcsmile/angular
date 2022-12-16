import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    email = '';
    password = '';
    showPass = true;

    constructor() { }

    ngOnInit(): void {}

    getInformation(event) {
        event.preventDefault();
        console.log(this.email, this.password);
        this.email = '';
        this.password = '';
    }

    showPassword() {
        this.showPass = !this.showPass;
    }
}
