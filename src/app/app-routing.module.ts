import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { ViewUserComponent } from './components/users/manager-users/view-user/view-user.component';
import { UsersComponent } from './components/users/users.component';
import { UpdateUserComponent } from './components/users/manager-users/update-user/update-user.component';
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'users', component: UsersComponent, children: [
    // {path: ':id', component: UpdateUserComponent}
  ]},
  // {path: 'detail', component: ViewUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
