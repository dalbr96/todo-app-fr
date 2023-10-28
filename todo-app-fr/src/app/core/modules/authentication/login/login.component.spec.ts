import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthorizationService } from 'src/app/core/http/services/authorization/authorization.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StandardButtonComponent } from 'src/app/shared/standard-button/standard-button.component';
import { TextInputComponent } from 'src/app/shared/text-input/text-input.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, TextInputComponent, StandardButtonComponent, RouterTestingModule],
      providers: [AuthorizationService]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
