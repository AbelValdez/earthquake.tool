import { useCallback, useReducer } from "react";
import { Earthquake } from "../models/Earthquake";
import { getEarthquakeDetails } from "../services/EarthquakeService";
import earthquakeReducer, { INITIAL_STATE } from "../store/EarthquakeDetailsReducer";

const useEarthquakeDetails = () => {
    const [state, dispatch ] = useReducer(earthquakeReducer, INITIAL_STATE);

    const fetchDetails = useCallback((id: string) => getEarthquakeDetails(id).then((res: Earthquake) =>{
        console.log("resultado: ", res);
        dispatch({type: "fetch", payload: {earthquake: res}}) 
    }), [dispatch]);

    return {
        state,
        fetchDetails
    }
}

export default useEarthquakeDetails;
