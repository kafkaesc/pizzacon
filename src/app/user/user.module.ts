import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { userRoutes } from './user.routes'
import { LoginComponent } from './login.component'
import { ProfileComponent } from './profile.component'

@NgModule({
    declarations: [
        LoginComponent,
        ProfileComponent
    ],
    imports: [
      RouterModule.forChild(userRoutes)
    ],
    providers: []
})
export class UserModule {

}