import axios from "axios"
import { Earthquake } from "../models/Earthquake";

const BASE_URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0";

export enum UrlFilter {
    all = "all",
    significant = "significant",
    magnitude_4_5 = "4.5",
    magnitude_2_5 = "2.5",
    magnitude_1_0 = "1.0",
};

export const getEarthquakes = (filter = UrlFilter.all) => {
    return axios.get<{features: Earthquake[]}>(`${BASE_URL}/summary/${filter}_hour.geojson`)
        .then(res => res.data.features);
}

export const getEarthquakeDetails = (id: string) => {    
    return axios.get<{features: Earthquake}>(`${BASE_URL}/detail/${id}.geojson`)
        .then(res => res.data as unknown as Earthquake);
}

export default getEarthquakes;
