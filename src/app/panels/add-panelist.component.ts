import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { IPanelist, PanelService, RestrictedWords } from './shared/index'

@Component({
    selector: 'add-panelist',
    styles: [
        `
            img.preview {
                max-height: 280px;
                max-width: 280px;
            }
        `
    ],
    templateUrl: './add-panelist.component.html'
})
export class AddPanelistComponent implements OnInit {
    @Output() save = new EventEmitter()

    panelService: PanelService

    private restrictedWords = ['anchovy', 'Anchovy', 'macbeth', 'Macbeth']

    panelistForm: FormGroup
    firstName: FormControl
    lastName: FormControl
    title: FormControl
    bio: FormControl
    imageUrl: FormControl

    constructor(ps: PanelService) {
        this.panelService = ps
    }

    ngOnInit() {
        this.firstName = new FormControl('', [Validators.maxLength(70), Validators.required])
        this.lastName = new FormControl('', [Validators.maxLength(70)])
        this.title = new FormControl('', [
            RestrictedWords(this.restrictedWords),
            Validators.maxLength(70)
        ])
        this.bio = new FormControl('', [
            RestrictedWords(this.restrictedWords),
            Validators.maxLength(140)
        ])
        this.imageUrl = new FormControl('', [
            Validators.maxLength(280),
            Validators.pattern('.*/.*.(png|jpg)')
        ])

        this.panelistForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
            title: this.title,
            bio: this.bio,
            imageUrl: this.imageUrl
        })
    }

    savePanelist() {
        let panelist: IPanelist = {
            id: null,
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            title: this.title.value,
            bio: this.bio.value,
            imageUrl: this.imageUrl.value
        }

        console.log('save panelist not implemented')
        this.save.emit(panelist)
    }
}
