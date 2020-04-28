import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'

import { PanelService } from './shared/panel.service'

@Component({
    templateUrl: './create-panel.component.html'
})
export class CreatePanelComponent {
    router: Router
    panelService: PanelService

    isDirty: boolean = false

    newPanel

    constructor(ps: PanelService, ro: Router) {
        this.panelService = ps
        this.router = ro
    }

    cancel() {
        this.router.navigate(['/panels'])
    }

    saveNewPanel(panel) {
        this.panelService.savePanel(panel)
        this.isDirty = false
        this.router.navigate(['/panels'])
    }
}
