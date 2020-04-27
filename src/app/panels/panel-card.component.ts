import { Component, Input } from '@angular/core'

import { IPanel } from './shared/panel.model'

@Component({
    selector: 'panel-card',
    styleUrls: ['./panel-card.component.css'],
    templateUrl: './panel-card.component.html'
})
export class PanelCardComponent {
    @Input() panel: IPanel
}
