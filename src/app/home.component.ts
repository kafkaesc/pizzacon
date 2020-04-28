import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent {
    router: Router
    
    constructor(ro: Router) {
        this.router = ro
    }

    gotoAbout() {
        this.router.navigate(['/about'])
    }
}
