import { useCallback, useReducer } from "react";
import { Earthquake } from "../models/Earthquake";
import getEarthquakes, { UrlFilter } from "../services/EarthquakeService";
import earthquakeReducer, { INITIAL_STATE } from "../store/EarthquakeReducer";


const useEarthquake = () => {
    const [earthquakeState, dispatch ] = useReducer(earthquakeReducer, INITIAL_STATE);

    const fetchSummary = useCallback(() => getEarthquakes(earthquakeState.selectedFilter).then((res: Earthquake[]) =>
        dispatch({type: "fetch", payload: {earthquakes: res}}) 
    ), [dispatch, earthquakeState.selectedFilter]);

    const changeFilter = useCallback((filter: UrlFilter) => 
        dispatch({type: "changeFilter", payload: {selectedFilter: filter}}
    ) , [dispatch]);

    const selectEarthquake = useCallback((id: string | null) =>         
        dispatch({type: "selectEarthquake", payload: {selectedEarthquakeId: id}}
    ), [dispatch]);

    return {
        earthquakeState,
        fetchSummary,
        changeFilter,
        selectEarthquake
    }
}

export default useEarthquake;
