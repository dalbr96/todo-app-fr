import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';


describe('HttpService', () => {
  let service: HttpService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(HttpService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should invoke the get method of httpClient', () => {
    spyOn(httpClient, 'get');

    service.get('/test');

    expect(httpClient.get).toHaveBeenCalledWith(`${environment.urlBase}${environment.api}/test`, { headers: undefined });
  });

  it('should invoke the post method of httpClient', () => {
    spyOn(httpClient, 'post');

    service.post('/test', {});

    expect(httpClient.post).toHaveBeenCalledWith(`${environment.urlBase}${environment.api}/test`, {});
  });
});
