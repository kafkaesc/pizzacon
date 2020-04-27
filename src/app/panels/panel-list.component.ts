import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { IPanel } from './shared/panel.model'
import { PanelService } from './shared'

@Component({
    templateUrl: './panel-list.component.html'
})
export class PanelListComponent implements OnInit {
    private panelService
    private route

    panels: IPanel[]

    ngOnInit() {
        this.panels = this.route.snapshot.data['panels']
        console.log("route: ", this.route)
        console.log("panels: ", this.panels)
    }

    constructor(ps: PanelService, ar: ActivatedRoute) {
        this.panelService = ps
        this.route = ar
    }
}
