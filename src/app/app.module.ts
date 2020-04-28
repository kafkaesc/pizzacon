import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { appRoutes } from './routes'
import { NavbarComponent } from './nav/navbar.component'
import { PizzaconAppComponent } from './pizzacon-app.component'

import {
    CreatePanelComponent,
    PanelCardComponent,
    PanelDetailsComponent,
    PanelListComponent,
    PanelListResolver,
    PanelService
} from './panels/index'

@NgModule({
    declarations: [
        CreatePanelComponent,
        NavbarComponent,
        PanelCardComponent,
        PanelDetailsComponent,
        PanelListComponent,
        PizzaconAppComponent
    ],
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [PanelService, PanelListResolver],
    bootstrap: [PizzaconAppComponent]
})
export class AppModule {}
