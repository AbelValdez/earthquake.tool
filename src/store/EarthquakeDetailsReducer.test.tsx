import { Earthquake } from '../models/Earthquake';
import earthquakeDetailsReducer, { INITIAL_STATE } from './EarthquakeDetailsReducer';

const earthquake = {
    id:'1234',
    properties: {
        mag: 1,
        place: 'Abels place'
    }
} as Earthquake;
    

describe('Earthquake Details Reducer', () => {   
    it('Verify Earthquake state', ()=> {
        let result = earthquakeDetailsReducer(INITIAL_STATE, {type:'fetch', payload: {earthquake: earthquake}});
        expect(result.earthquake.id).toEqual(earthquake.id);
        expect(result.earthquake.geometry).toEqual(earthquake.geometry);
        expect(result.earthquake.properties).toEqual(earthquake.properties);
    });

})