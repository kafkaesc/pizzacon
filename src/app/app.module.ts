import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { appRoutes } from './routes'
import { NavbarComponent } from './nav/navbar.component'
import { PizzaconAppComponent } from './pizzacon-app.component'

import {
    PanelCardComponent,
    PanelDetailsComponent,
    PanelListComponent,
    PanelListResolver,
    PanelService
} from './panels/index'

@NgModule({
    declarations: [
        NavbarComponent,
        PanelCardComponent,
        PanelDetailsComponent,
        PanelListComponent,
        PizzaconAppComponent
    ],
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    providers: [PanelService, PanelListResolver],
    bootstrap: [PizzaconAppComponent]
})
export class AppModule {}
