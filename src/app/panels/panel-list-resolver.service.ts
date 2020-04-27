import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'

import { map } from 'rxjs/operators'

import { PanelService } from './shared/panel.service'

@Injectable()
export class PanelListResolver implements Resolve<any> {
    private panelService: PanelService

    constructor(ps: PanelService) {
        this.panelService = ps
    }

    resolve() {
        return this.panelService.getPanels().pipe(map((panels) => panels))
    }
}
