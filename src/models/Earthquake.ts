
export interface Earthquake {
    id: string,
    properties: Properties
}

export interface Properties {
    mag: number,
    place: string,
}