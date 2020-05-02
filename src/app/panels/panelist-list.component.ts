import { Component, Input } from '@angular/core'

import { IPanelist } from './shared/index'

@Component({
    selector: 'panelist-list',
    templateUrl: './panelist-list.component.html'
})
export class PanelistListComponent {
    @Input() panelists: IPanelist[]
}