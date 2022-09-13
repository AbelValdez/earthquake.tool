import axios from "axios"
import { Earthquake } from "../models/Earthquake";

const BASE_URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/[FILTER]_hour.geojson";

export enum UrlFilter {
    all = "all",
    significant = "significant",
    magnitude_4_5 = "4.5",
    magnitude_2_5 = "2.5",
    magnitude_1_5 = "1.0",    
};

const getEarthquakes = (filter = UrlFilter.all) => {
    console.log("llamada al aPI");
    const url = BASE_URL.replace("[FILTER]", filter);
    return axios.get<{features: Earthquake[]}>(url)
        .then(res => res.data.features);
}

export default getEarthquakes;