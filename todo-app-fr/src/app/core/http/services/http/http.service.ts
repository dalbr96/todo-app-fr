import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService{
  constructor(private readonly http: HttpClient) { }

  get<TResponse>(url: string): Observable<TResponse> {
    return this.http.get<TResponse>(url);
  }

  post<TResponse, TRequest> (url: string, body: TRequest): Observable<TResponse> {
    return this.http.post<TResponse>(url, body);
  }
}
