
export interface Earthquake {
    id: string,
    properties: Properties
    geometry: geometry;
}

export interface Properties {
    mag: number,
    place: string,    
    time: number;
    tsunami: boolean;
    type: string;
    url: string;
    status: string;
    magType: string
    title: string;
}

export interface geometry {
    coordinates: Array<number>;
}