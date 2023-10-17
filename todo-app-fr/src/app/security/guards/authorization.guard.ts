import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";

export const guardFunction: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return true;
}