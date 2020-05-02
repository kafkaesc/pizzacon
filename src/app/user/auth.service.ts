import { Injectable } from '@angular/core'

import { IUser } from './user.model'

@Injectable()
export class AuthService {
    currentUser: IUser

    isAuthenticated() {
        return !!this.currentUser
    }

    login(username: string, password: string) {
        if (password) {
            this.currentUser = {
                id: 1,
                username: username,
                firstName: 'Andrew',
                lastName: 'Panucci',
                favoritePizza: 'cheese'
            }
        }
    }

    updateCurrentUser(firstName: string, lastName: string, favoritePizza: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
        this.currentUser.favoritePizza = favoritePizza
    }
}
