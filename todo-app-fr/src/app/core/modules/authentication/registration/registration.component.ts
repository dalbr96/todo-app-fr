import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegistrationForm } from './registration.form';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  registrationForm: RegistrationForm

  constructor(readonly formBuilder: FormBuilder) {
    this.registrationForm = new RegistrationForm(formBuilder);
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

  signInUser(){}
}
