import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { authRoutes } from './authentication-routes';
import { AuthorizationService } from '../../http/services/authorization/authorization.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegistrationComponent, LoginComponent],
  exports: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule
  ],
  providers: [AuthorizationService]
})
export class AuthenticationModule { }
