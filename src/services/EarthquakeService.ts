import axios from "axios"
import { Earthquake } from "../models/Earthquake";

const BASE_SUMMARY_URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/[FILTER]_hour.geojson";
const BASE_DETAILS_URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/[ID].geojson";


export enum UrlFilter {
    all = "all",
    significant = "significant",
    magnitude_4_5 = "4.5",
    magnitude_2_5 = "2.5",
    magnitude_1_0 = "1.0",
};

export const getEarthquakes = (filter = UrlFilter.all) => {
    const url = BASE_SUMMARY_URL.replace("[FILTER]", filter);
    return axios.get<{features: Earthquake[]}>(url)
        .then(res => res.data.features);
}

export const getEarthquakeDetails = (id: string) => {
    const url = BASE_DETAILS_URL.replace("[ID]", id);
    return axios.get<{features: Earthquake}>(url)
        .then(res => res.data as unknown as Earthquake);
}

export default getEarthquakes;
