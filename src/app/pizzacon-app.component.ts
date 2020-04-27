import { Component } from '@angular/core'

@Component({
    selector: 'pizzacon-app',
    template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `
})
export class PizzaconAppComponent {
    title = 'ng-fundamentals'
}
