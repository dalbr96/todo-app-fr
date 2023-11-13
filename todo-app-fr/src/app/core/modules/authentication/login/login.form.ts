import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class LoginForm extends FormGroup {

    readonly username = this.get('username') as FormControl;
    readonly password = this.get('password') as FormControl;

    constructor(readonly fb: FormBuilder) {
        super(fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        }).controls)
    }
}