import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { authMock } from 'src/assets/test/model/auth.mock';
import { credentialsMock } from 'src/assets/test/model/credentials.mock';
import { userMock } from 'src/assets/test/model/user.mock';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { AuthorizationService } from './authorization.service';

describe('AuthorizationService', () => {
  let service: AuthorizationService;
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService, AuthorizationService]
    });
    service = TestBed.inject(AuthorizationService);
    httpService = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('checkLoggedUser should invoke the method get of httpService and assign the response to isLoggedIn', () => {
    spyOn(httpService, 'get').and.returnValue(of(true));

    service.checkLoggedUser().subscribe();

    expect(httpService.get).toHaveBeenCalledWith(environment.userEndpoint);
    expect(service.loggedIn()).toBeTrue();
  });

  it('loginUser should invoke the post method of httpService and assign isLoggedIn to true if there is a response', () => {
    spyOn(httpService, 'post').and.returnValue(of(authMock));

    service.loginUser(credentialsMock).subscribe();

    expect(httpService.post).toHaveBeenCalledWith(environment.loginEndpoint, credentialsMock);
    expect(service.loggedIn()).toBeTrue();
  });


  it('signInUser should invoke the post method of httpService', () => {
    spyOn(httpService, 'post');

    service.signInUser(userMock);

    expect(httpService.post).toHaveBeenCalledWith(environment.signInEndpoint, userMock);
  })
});
