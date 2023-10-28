import { TestBed } from '@angular/core/testing';

import { AuthorizationInterceptor } from './authorization.interceptor';
import { RouterModule } from '@angular/router';

fdescribe('AuthorizationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthorizationInterceptor,
      RouterModule,
      
    ]
  }));

  it('should be created', () => {
    const interceptor: AuthorizationInterceptor = TestBed.inject(AuthorizationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
