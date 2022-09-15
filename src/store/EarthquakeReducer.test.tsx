import { Earthquake } from '../models/Earthquake';
import { UrlFilter } from '../services/EarthquakeService';
import earthquakeReducer, { INITIAL_STATE } from './EarthquakeReducer';

const earthquakes = [
    {
        id:'1234',
        properties: {
            mag: 1,
            place: 'Abels place'
        }
    },
    {
        id: '12345',
        properties: {
            mag: 1,
            place: 'Abels place'
        }
    }
] as Earthquake[];

describe('Earthquake Reducer', () => {   
    it('Verify change selectedFilter state', ()=> {
        let result = earthquakeReducer(INITIAL_STATE, {type:'changeFilter', payload: {selectedFilter: UrlFilter.magnitude_1_0}});
        expect(result.selectedFilter).toEqual(UrlFilter.magnitude_1_0)

        result = earthquakeReducer(INITIAL_STATE, {type:'changeFilter', payload: {selectedFilter: UrlFilter.magnitude_2_5}});
        expect(result.selectedFilter).toEqual(UrlFilter.magnitude_2_5)

        result = earthquakeReducer(INITIAL_STATE, {type:'changeFilter', payload: {selectedFilter: UrlFilter.magnitude_4_5}});
        expect(result.selectedFilter).toEqual(UrlFilter.magnitude_4_5)

        result = earthquakeReducer(INITIAL_STATE, {type:'changeFilter', payload: {selectedFilter: UrlFilter.significant}});
        expect(result.selectedFilter).toEqual(UrlFilter.significant)
    });

    it('Verify earthquakes State', ()=> {        
        let result = earthquakeReducer(INITIAL_STATE, {type:'fetch', payload: {earthquakes: earthquakes}});
        expect(result.earthquakes[0].properties.mag).toEqual(result.earthquakes[0].properties.mag)
    });

    it('Verify selectedEarthquakeId State', ()=> {        
        let result = earthquakeReducer(INITIAL_STATE, {type:'selectEarthquake', payload: {selectedEarthquakeId: earthquakes[0].id}});
        expect(result.selectedEarthquakeId).toEqual(earthquakes[0].id);

        result = earthquakeReducer(INITIAL_STATE, {type:'selectEarthquake', payload: {selectedEarthquakeId: earthquakes[1].id}});
        expect(result.selectedEarthquakeId).toEqual(earthquakes[1].id);        
    });
})