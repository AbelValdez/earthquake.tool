import { useCallback, useReducer } from "react";
import { Earthquake } from "../models/Earthquake";
import { getEarthquakeDetails } from "../services/EarthquakeService";
import earthquakeDetailsReducer, { INITIAL_STATE } from "../store/EarthquakeDetailsReducer";

const useEarthquakeDetails = () => {
    const [state, dispatch ] = useReducer(earthquakeDetailsReducer, INITIAL_STATE);

    const fetchDetails = useCallback((id: string) => getEarthquakeDetails(id).then((res: Earthquake) =>{        
        dispatch({type: "fetch", payload: {earthquake: res}}) 
    }), [dispatch]);

    return {
        state,
        fetchDetails
    }
}

export default useEarthquakeDetails;
