import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { of } from "rxjs";
import { AuthorizationService } from "src/app/core/http/services/authorization/authorization.service";

export const guardFunction: CanActivateFn = () => {
  const authService: AuthorizationService = inject(AuthorizationService);
  const router = inject(Router);

  if (authService.loggedIn()) {
    return of(true);
  }

  return router.parseUrl('/login');
}