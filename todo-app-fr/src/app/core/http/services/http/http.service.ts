import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private readonly http: HttpClient) { }

  get<TResponse>(url: string, headers?: HttpHeaders): Observable<TResponse> {
    return this.http.get<TResponse>(environment.urlBase + environment.api + url, { headers });
  }

  post<TResponse, TRequest>(url: string, body: TRequest): Observable<TResponse> {
    return this.http.post<TResponse>(environment.urlBase + environment.api + url, body);
  }
}
