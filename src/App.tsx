import { useEffect } from 'react';
import EarthquakeList from './components/EarthquakeList/EarthquakeList'
import useEarthquake from "./hooks/useEarthquake"
import './App.scss';
import EarthquakeFilter from './components/EarthquakeFilter/EarthquakeFilter';
import EarthquakeDetailsModal from './components/EarthquakeDetailsModal/EarthquakeDetailsModal';

function App() {
  const {earthquakeState, fetchSummary, changeFilter, selectEarthquake} = useEarthquake();  
  const MINUTE_MS = 60000;

  useEffect(() => {
    fetchSummary();
    const interval = setInterval(() => {
      fetchSummary();
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, [fetchSummary])

  return (
    
    <div className="App">
      <EarthquakeDetailsModal 
        id={earthquakeState.selectedEarthquakeId} 
        onCloseModal={() => selectEarthquake(null)}
      />

        <div className='header'>
          <EarthquakeFilter selectedFilter={earthquakeState.selectedFilter} onClick={changeFilter}/>
        </div>
        <div className='body'>
          <EarthquakeList earthquakes={earthquakeState.earthquakes} onClick={selectEarthquake}/>
        </div>       
    </div>
    
  );
}

export default App;
