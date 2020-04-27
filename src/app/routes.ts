import { Routes } from '@angular/router'

import { Error404Component, Error500Component } from './errors/index'

import { AboutComponent } from './about.component'
import { HomeComponent } from './home.component'
import { UserModule } from './user/user.module'

import { PanelDetailsComponent, PanelListComponent, PanelListResolver } from './panels/index'

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: 'about', component: AboutComponent },
    { path: 'panels', component: PanelListComponent, resolve: { panels: PanelListResolver } },
    { path: 'panels/:id', component: PanelDetailsComponent },
    { path: '404', component: Error404Component },
    { path: '500', component: Error500Component }
]
