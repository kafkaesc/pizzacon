import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { appRoutes } from './routes'
import { AuthService } from './user/auth.service'
import { NavbarComponent } from './nav/navbar.component'
import { PizzaconAppComponent } from './pizzacon-app.component'

import {
    AddPanelistComponent,
    CreatePanelComponent,
    PanelCardComponent,
    PanelDetailsComponent,
    PanelListComponent,
    PanelListResolver,
    PanelService,
    PanelistListComponent
} from './panels/index'

@NgModule({
    declarations: [
        AddPanelistComponent,
        CreatePanelComponent,
        NavbarComponent,
        PanelCardComponent,
        PanelDetailsComponent,
        PanelListComponent,
        PanelistListComponent,
        PizzaconAppComponent
    ],
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    providers: [AuthService, PanelService, PanelListResolver],
    bootstrap: [PizzaconAppComponent]
})
export class AppModule {}
