import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardButtonComponent } from './standard-button.component';

describe('StandardButtonComponent', () => {
  let component: StandardButtonComponent;
  let fixture: ComponentFixture<StandardButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StandardButtonComponent]
    });
    fixture = TestBed.createComponent(StandardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event when clickedButton is invoked', () => {
    spyOn(component.clickEvent, 'emit');

    component.clickedButton();

    expect(component.clickEvent.emit).toHaveBeenCalled();
  })
});
