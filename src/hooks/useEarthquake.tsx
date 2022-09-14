import { useCallback, useReducer } from "react";
import { Earthquake } from "../models/Earthquake";
import getEarthquakes, { UrlFilter } from "../services/EarthquakeService";

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

const INITIAL_STATE = {
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

const useEarthquake = () => {
    const [earthquakeState, dispatch ] = useReducer(earthquakeReducer, INITIAL_STATE);

    const fetch = useCallback(() => getEarthquakes(earthquakeState.selectedFilter).then((res: Earthquake[]) =>
        dispatch({type: "fetch", payload: {earthquakes: res}}) 
    ), [dispatch, earthquakeState.selectedFilter]);

    const changeFilter = useCallback((filter: UrlFilter) => 
        dispatch({type: "changeFilter", payload: {selectedFilter: filter}}
    ) , [dispatch]);

    const selectEarthquake = useCallback((id: string | null) => {
        console.log("ID selected", id)
        dispatch({type: "selectEarthquake", payload: {selectedEarthquakeId: id}}) } , [dispatch]);

    return {
        earthquakeState,
        fetch,
        changeFilter,
        selectEarthquake
    }
}

export default useEarthquake;
