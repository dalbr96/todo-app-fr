import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { AuthorizationService } from 'src/app/core/http/services/authorization/authorization.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TextInputComponent } from 'src/app/shared/text-input/text-input.component';
import { StandardButtonComponent } from 'src/app/shared/standard-button/standard-button.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [HttpClientTestingModule, TextInputComponent, StandardButtonComponent, RouterTestingModule],
      providers: [AuthorizationService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
