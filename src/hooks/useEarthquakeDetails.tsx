import { useCallback, useReducer } from "react";
import { Earthquake } from "../models/Earthquake";
import { getEarthquakeDetails } from "../services/EarthquakeService";

interface EarthquakeState {
    earthquake: Earthquake;
}

type EarthquakeReducerAction = {
    type: "fetch"
    payload: {earthquake: Earthquake}
}

const INITIAL_STATE = {
    earthquake: {}
} as EarthquakeState;

const earthquakeReducer = (state: EarthquakeState, action: EarthquakeReducerAction) => {
    switch(action.type) {
        case "fetch":
            return {...state, earthquake: action.payload.earthquake};
       default: 
            return INITIAL_STATE;
    }
}

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
