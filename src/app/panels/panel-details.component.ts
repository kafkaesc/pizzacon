import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { IPanel, IPanelist } from './shared/panel.model'
import { PanelService } from './shared/panel.service'

@Component({
    styles: [
        `
            @media (min-width: 769px) {
                .btn-h3 {
                    float: right;
                }
            }
        `
    ],
    styleUrls: ['./panel-details.component.css'],
    templateUrl: './panel-details.component.html'
})
export class PanelDetailsComponent {
    displayMode: string
    panel: IPanel

    private activatedRoute: ActivatedRoute
    private panelService: PanelService

    constructor(ps: PanelService, ar: ActivatedRoute) {
        this.activatedRoute = ar
        this.panelService = ps

        this.displayMode = 'list'
    }

    ngOnInit() {
        this.panel = this.panelService.getPanel(+this.activatedRoute.snapshot.params['id'])
    }

    setAddMode() {
        this.displayMode = 'add'
    }

    setListMode() {
        this.displayMode = 'list'
    }

    addPanelist(panelist: IPanelist) {
        const MAXID = Math.max.apply(
            null,
            this.panel.panelists.map((pan) => pan.id)
        )

        panelist.id = MAXID + 1
        this.panel.panelists.push(panelist)
        this.panelService.updatePanel(this.panel)
        this.displayMode = 'list'
    }
}
