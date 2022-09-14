import { Earthquake } from "../models/Earthquake";

type EarthquakeState = {
    earthquake: Earthquake;
}

type EarthquakeReducerAction = {
    type: "fetch"
    payload: {earthquake: Earthquake}
}

export const INITIAL_STATE = {
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

export default earthquakeReducer;