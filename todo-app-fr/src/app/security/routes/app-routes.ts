import { Routes } from "@angular/router";
import { RegistrationComponent } from "src/app/shared/registration/registration.component";
import { guardFunction } from "../guards/authorization.guard";
import { TestComponent } from "src/app/shared/test/test.component";
import { LoginComponent } from "src/app/shared/login/login.component";

export const appRoutes: Routes = [
    { path: '', component: TestComponent, canActivate: [guardFunction] },
    { path: 'login', component: LoginComponent },
    { path: 'sign_in', component: RegistrationComponent },
    { path: '**', redirectTo: 'login' }
]