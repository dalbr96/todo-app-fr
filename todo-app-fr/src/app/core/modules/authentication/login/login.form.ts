import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Credentials } from "src/app/core/model/credentials.model";

export class LoginForm extends FormGroup {

    readonly username = this.get('username') as FormControl;
    readonly password = this.get('password') as FormControl;

    constructor(readonly fb: FormBuilder, readonly creentials?: Credentials) {
        super(fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        }).controls)
    }
}