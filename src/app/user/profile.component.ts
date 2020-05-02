import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { AuthService } from '../user/auth.service'

@Component({
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
    private auth
    private router

    profileForm: FormGroup
    private firstName: FormControl
    private lastName: FormControl
    private favoritePizza: FormControl

    constructor(as: AuthService, ro: Router) {
        this.auth = as
        this.router = ro
    }

    ngOnInit() {
        this.firstName = new FormControl(this.auth.currentUser.firstName, [
            Validators.pattern('[a-zA-Z].*'),
            Validators.required
        ])

        this.lastName = new FormControl(this.auth.currentUser.lastName, [
            Validators.pattern('[a-zA-Z].*'),
            Validators.required
        ])

        this.favoritePizza = new FormControl(this.auth.currentUser.favoritePizza)

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
            favoritePizza: this.favoritePizza
        })
    }

    cancel() {
        this.router.navigate([''])
    }

    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this.auth.updateCurrentUser(
                formValues.firstName,
                formValues.lastName,
                formValues.favoritePizza
            )
            this.router.navigate([''])
        }
    }
}
