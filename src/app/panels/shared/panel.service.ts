import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { IPanel } from './panel.model'

@Injectable()
export class PanelService {
    getPanels(): Observable<IPanel[]> {
        let subject = new Subject<IPanel[]>()
        setTimeout(() => {
            subject.next(PANELS)
            subject.complete()
        }, 100)

        return subject
    }

    getPanel(id: number): IPanel {
        return PANELS.find((panel) => panel.id === id)
    }

    savePanel(panel: IPanel) {
        panel.id = 999
        panel.panelists = []
        PANELS.push(panel)
    }

    updatePanel(panel: IPanel) {
        let index = PANELS.findIndex((pa) => pa.id === panel.id)
        PANELS[index] = panel
    }
}

const PANELS: IPanel[] = [
    {
        id: 1,
        name: 'The Philosophy of Pizza',
        blurb: 'A roundtable discussion',
        abstract:
            'Can there be an objective measure of taste? What is the importance of mouthfeel? Four renowned Renaissance thinkers sit down for a roundtable discussion about the various aspects of pizza.',
        date: 'Jul 17, 2020',
        time: '10:00 am',
        imageUrl: '/assets/images/default-panel-image.png',
        location: 'Room 210',
        onlineUrl: 'string',
        panelists: [
            { id: 1, firstName: 'Leonardo' },
            { id: 2, firstName: 'Raphael' },
            { id: 3, firstName: 'Donatello' },
            { id: 4, firstName: 'Michelangelo' }
        ]
    },
    {
        id: 2,
        name: "Little Caesar's Big Problem",
        blurb: "Can the Roman pizzaman keep up with Italy's changing tastes?",
        abstract:
            "A betrayal from his two business partners last March caused the famed Roman to lay low. Now he's returning to discuss the modern challenges facing pizza restaurants across Italy.",
        date: 'Jul 18, 2020',
        time: '1:00 pm',
        imageUrl: null,
        location: 'Room 396',
        onlineUrl: 'string',
        panelists: []
    },
    {
        id: 3,
        name: 'Pineapple & Pizza',
        blurb: 'A look into the controversy',
        abstract:
            "To some it is a match made in heaven, to others it is a pizza abomination. Some say the sweetness of pineapple contrasts well with the more savory notes of a traditional pizza. Others say the acidic fruit leaves an acerbic taste. This panel won't close the book on this controversy but it will be fearless in its examination of the issue.",
        date: 'Jul 19, 2020',
        time: 'string',
        imageUrl: null,
        location: 'Room 512',
        onlineUrl: 'string',
        panelists: []
    }
]
