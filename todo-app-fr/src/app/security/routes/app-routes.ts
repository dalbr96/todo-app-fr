import { Routes } from "@angular/router";
import { RegistrationComponent } from "src/app/shared/registration/registration.component";
import { guardFunction } from "../guards/authorization.guard";

export const appRoutes: Routes = [
    { path: '/registro', component: RegistrationComponent},
    { path: '**', redirectTo: '/registro' }
]