import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
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
    PanelistCardComponent,
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
        PanelistCardComponent,
        PanelistListComponent,
        PizzaconAppComponent
    ],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
    providers: [AuthService, PanelService, PanelListResolver],
    bootstrap: [PizzaconAppComponent]
})
export class AppModule {}
