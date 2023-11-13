import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StandardButtonComponent } from 'src/app/shared/standard-button/standard-button.component';
import { TextInputComponent } from 'src/app/shared/text-input/text-input.component';
import { AuthorizationService } from '../../http/services/authorization/authorization.service';
import { authRoutes } from './authentication-routes';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [RegistrationComponent, LoginComponent],
  exports: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule,
    TextInputComponent,
    StandardButtonComponent
  ],
  providers: [AuthorizationService]
})
export class AuthenticationModule { }
