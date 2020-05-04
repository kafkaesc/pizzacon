import { Component, Input } from '@angular/core'

import { IPanelist } from './shared/panel.model'

@Component({
    selector: 'panelist-card',
    styleUrls: ['./panelist-card.component.css'],
    templateUrl: './panelist-card.component.html'
})
export class PanelistCardComponent {
    @Input() panelist: IPanelist
}
