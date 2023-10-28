import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { of } from "rxjs";
import { AuthorizationService } from "src/app/core/http/services/authorization/authorization.service";

export const guardFunction: CanActivateFn = () => {
  const authService: AuthorizationService = inject(AuthorizationService);

  if (!authService.loggedIn()) {
    return authService.checkLoggedUser();
  }
  return true;
}