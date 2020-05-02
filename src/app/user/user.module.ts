import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
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
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(userRoutes)
    ],
    providers: []
})
export class UserModule {

}