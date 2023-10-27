import { Routes } from "@angular/router";
import { guardFunction } from "./security/guards/authorization.guard";
import { TestComponent } from "src/app/shared/test/test.component";

export const appRoutes: Routes = [
    { path: '', component: TestComponent, canActivate: [guardFunction] },
    { path: 'authentication', loadChildren: () => import('./core/modules/authentication/authentication.module').then(m => m.AuthenticationModule) }
]