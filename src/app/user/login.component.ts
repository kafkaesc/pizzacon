import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'

import { AuthService } from './auth.service'

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    private authService: AuthService
    private router: Router

    username
    password
    mouseoverLogin

    constructor(as: AuthService, ro: Router) {
        this.authService = as
        this.router = ro
    }

    cancel() {
        this.router.navigate([''])
    }

    login(formValues) {
        this.authService.login(formValues.username, formValues.password)
        this.router.navigate([''])
    }
}
