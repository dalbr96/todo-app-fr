import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Credentials } from "src/app/core/model/credentials.model";

export class RegistrationForm extends FormGroup {

    readonly username = this.get('username') as FormControl;
    readonly password = this.get('password') as FormControl;
    readonly email = this.get('email') as FormControl;
    readonly name = this.get('name') as FormControl;

    constructor(readonly fb: FormBuilder) {
        super(fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            email: ['', Validators.required, Validators.email],
            name: ['', Validators.required]
        }).controls)
    }
}