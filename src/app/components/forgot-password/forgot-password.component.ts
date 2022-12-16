import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email = '';
  password = '';
  confirmPassword = '';
  showPass = false;

  constructor() { }

  ngOnInit(): void { }

  showPassword() {
    this.showPass = !this.showPass;
  }

}
