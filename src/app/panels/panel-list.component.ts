import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { IPanel } from './shared/panel.model'
import { PanelService } from './shared'

@Component({
    styles: [
        `
            @media (min-width: 769px) {
                .btn-h1 {
                    margin-top: 14px;
                }
            }
        `
    ],
    templateUrl: './panel-list.component.html'
})
export class PanelListComponent implements OnInit {
    private panelService
    private route
    private router

    panels: IPanel[]

    constructor(ps: PanelService, ar: ActivatedRoute, ro: Router) {
        this.panelService = ps
        this.route = ar
        this.router = ro
    }

    ngOnInit() {
        this.panels = this.route.snapshot.data['panels']
    }

    gotoCreatePanel() {
        this.router.navigate(['/panels/new'])
    }
}
