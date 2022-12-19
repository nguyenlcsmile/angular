import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    account = {
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }

    showPass = false;
    messageEmail = '';

    constructor(private router: Router) { }

    ngOnInit(): void { }

    validateEmail(email) {
        return String(email).toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }

    getInformation(event) {
        event.preventDefault();

        // validate form 
        let nameInput = ['email', 'password']
        for (let i = 0; i < nameInput.length; i++) {
            this.account.email.isValid = false;
            this.account.password.isValid = false;

            if (this.account[nameInput[i]].value === '') {
                this.account[nameInput[i]].isValid = true;
                if (nameInput[i] === 'email') this.messageEmail = 'Please enter email.'
                return;
            }
        }

        // validate email
        let isValidEmail = this.validateEmail(this.account.email.value);
        if (!isValidEmail) {
            this.account.email.isValid = true;
            this.messageEmail = 'Email is not valid.'
            return;
        }

        console.log(this.account.email.value, this.account.email.value);
        this.account.email.value = '';
        this.account.password.value = '';
    }

    showPassword() {
        this.showPass = !this.showPass;
    }
}
