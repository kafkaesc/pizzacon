export interface IPanel {
    id: number
    name: string
    blurb: string
    abstract: string
    date: string
    time: string
    imageUrl?: string
    location?: string
    onlineUrl?: string
    panelists: IPanelist[]
}

export interface IPanelist {
    id: number
    firstName: string
    lastName?: string
    imageUrl?: string
    bio?: string
    favoritePizza?: string
}
