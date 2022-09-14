import { Earthquake } from "../models/Earthquake";

type EarthquakeDetailsState = {
    earthquake: Earthquake;
}

type EarthquakeDetailsReducerAction = {
    type: "fetch"
    payload: {earthquake: Earthquake}
}

export const INITIAL_STATE = {
    earthquake: {}
} as EarthquakeDetailsState;

const earthquakeDetailsReducer = (state: EarthquakeDetailsState, action: EarthquakeDetailsReducerAction) => {
    switch(action.type) {
        case "fetch":
            return {...state, earthquake: action.payload.earthquake};
       default: 
            return INITIAL_STATE;
    }
}

export default earthquakeDetailsReducer;
