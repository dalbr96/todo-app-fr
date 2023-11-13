import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { LoginForm } from "./login.form";

describe('LoginForm', () => {
    it('Should return a form control, case name', () => {
        const form = new LoginForm(new FormBuilder);
        const control: FormControl = form.username;

        expect(control).toEqual(form.get('username') as FormControl);
    });

    it('Should return a form control, case password', () => {
        const form = new LoginForm(new FormBuilder);
        const control: FormControl = form.password;

        expect(control).toEqual(form.get('password') as FormControl);
    });
});
