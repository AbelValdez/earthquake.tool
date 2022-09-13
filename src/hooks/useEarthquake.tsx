import { useReducer } from "react";
import { Earthquake } from "../models/Earthquake";
import getEarthquakes from "../services/EarthquakeService";

type EarthquakeReducerAction = {
    type: "fetch"
    payload: {earthquakes: Earthquake[]}
} 

const INITIAL_STATE = Array<Earthquake>();

const earthquakeReducer = (state:  Earthquake[], action: EarthquakeReducerAction) => {
    switch(action.type) {
        case "fetch":
            return action.payload.earthquakes;
        default:
            return INITIAL_STATE;
    }
}

const useEarthquake = () => {
    const [earthquakes, dispatch ] = useReducer(earthquakeReducer, INITIAL_STATE);

    const fetch = () => getEarthquakes().then(res =>
        dispatch({type: "fetch", payload: {earthquakes: res}}) 
    );

    return {
        earthquakes,        
        fetch
    }
}

export default useEarthquake;
