import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";

export const authRoutes: Routes = [
    { path: '', redirectTo: 'authentication/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'sign_in', component: RegistrationComponent }
]