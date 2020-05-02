import { Component } from '@angular/core'

import { AuthService } from '../user/auth.service'

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    auth: AuthService

    constructor(as: AuthService) {
        this.auth = as
    }
}
