import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { UsersComponent } from './components/users/users.component';
import { ViewUserComponent } from './components/users/manager-users/view-user/view-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateUserComponent } from './components/users/manager-users/update-user/update-user.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    UsersComponent,
    ViewUserComponent,
    UpdateUserComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
