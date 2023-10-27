import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { authRoutes } from './authentication-routes';
import { AuthorizationService } from '../../http/services/authorization/authorization.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from 'src/app/shared/text-input/text-input.component';



@NgModule({
  declarations: [RegistrationComponent, LoginComponent],
  exports: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule,
    TextInputComponent
  ],
  providers: [AuthorizationService]
})
export class AuthenticationModule { }
