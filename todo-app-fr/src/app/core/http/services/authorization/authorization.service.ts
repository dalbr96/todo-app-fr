import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable({providedIn: 'root'})

export class AuthorizationService {
  constructor(private http: HttpService) { }
  
  loggedIn(): Observable<boolean>{
    return this.http.get<boolean>('/user')
  }
}