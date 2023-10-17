import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })

export class AuthorizationService {
  private isLoggedIn = false;

  constructor(private http: HttpService) { }

  checkLoggedUser(): Observable<boolean> {
    return this.http.get<boolean>(environment.userEndpoint).pipe(tap((response: boolean) => this.isLoggedIn = response))
  }

  loggedIn(): boolean {
    return this.isLoggedIn;
  }
}