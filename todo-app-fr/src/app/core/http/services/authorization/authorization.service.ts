import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Auth } from 'src/app/core/model/auth.model';
import { Credentials } from 'src/app/core/model/credentials.model';
import { User } from 'src/app/core/model/user.model';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable()

export class AuthorizationService {
  private isLoggedIn = false;

  constructor(private http: HttpService) { }

  checkLoggedUser(): Observable<boolean> {
    return this.http.get<boolean>(environment.userEndpoint).pipe(tap((response: boolean) => this.isLoggedIn = response))
  }

  loginUser(body: Credentials): Observable<Auth> {
    return this.http.post<Auth, Credentials>(environment.loginEndpoint, body).pipe(tap((response) => this.isLoggedIn = !!response));
  }

  signInUser(body: User): Observable<User> {
    return this.http.post<User, User>(environment.signInEndpoint, body);
  }

  loggedIn(): boolean {
    return this.isLoggedIn;
  }
}