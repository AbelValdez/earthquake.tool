import { useCallback, useReducer } from "react";
import { Earthquake } from "../models/Earthquake";
import getEarthquakes, { UrlFilter } from "../services/EarthquakeService";

interface EarthquakeState {
    earthquakes: Array<Earthquake>;
    selectedFilter: UrlFilter;
}

type EarthquakeReducerAction = {
    type: "fetch"
    payload: {earthquakes: Earthquake[]}
} |
{
    type: "changeFilter"
    payload: {selectedFilter: UrlFilter}
}

const INITIAL_STATE = {
    earthquakes: Array<Earthquake>(),
    selectedFilter: UrlFilter.all
} as EarthquakeState;

const earthquakeReducer = (state: EarthquakeState, action: EarthquakeReducerAction) => {
    switch(action.type) {
        case "fetch":
            return {...state, earthquakes: action.payload.earthquakes};
        case "changeFilter":
                return {...state, selectedFilter: action.payload.selectedFilter};
        default:
            return INITIAL_STATE;
    }
}

const useEarthquake = () => {
    const [state, dispatch ] = useReducer(earthquakeReducer, INITIAL_STATE);

    const fetch = useCallback(() => getEarthquakes(state.selectedFilter).then(res =>
        dispatch({type: "fetch", payload: {earthquakes: res}}) 
    ), [dispatch, state.selectedFilter]);

    const changeFilter = useCallback((filter: UrlFilter) => 
        dispatch({type: "changeFilter", payload: {selectedFilter: filter}}
    ) , [dispatch]);

    return {
        state,
        fetch,
        changeFilter
    }
}

export default useEarthquake;
