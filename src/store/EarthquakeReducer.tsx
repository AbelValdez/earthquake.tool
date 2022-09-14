import { Earthquake } from "../models/Earthquake";
import { UrlFilter } from "../services/EarthquakeService";

interface EarthquakeState {
    earthquakes: Array<Earthquake>;
    selectedFilter: UrlFilter;
    selectedEarthquakeId: string | null;
}

type EarthquakeReducerAction = {
    type: "fetch"
    payload: {earthquakes: Earthquake[]}
} |
{
    type: "changeFilter"
    payload: {selectedFilter: UrlFilter}
} |
{
    type: "selectEarthquake"
    payload: {selectedEarthquakeId: string | null}
}

export const INITIAL_STATE = {
    earthquakes: Array<Earthquake>(),
    selectedFilter: UrlFilter.all,
    selectedEarthquakeId: null
} as EarthquakeState;

const earthquakeReducer = (state: EarthquakeState, action: EarthquakeReducerAction) => {
    switch(action.type) {
        case "fetch":
            return {...state, earthquakes: action.payload.earthquakes};
        case "changeFilter":
            return {...state, selectedFilter: action.payload.selectedFilter};
        case "selectEarthquake":
            return {...state, selectedEarthquakeId: action.payload.selectedEarthquakeId};
        default:
            return INITIAL_STATE;
    }
}

export default earthquakeReducer;