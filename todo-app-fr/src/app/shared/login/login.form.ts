import { FormControl, FormGroup, Validators } from "@angular/forms";

export const loginForm: FormGroup = new FormGroup({
    username: new FormControl('', { validators: [Validators.required], updateOn: 'blur' }),
    password: new FormControl('', { validators: [Validators.required], updateOn: 'blur' })
})