import { useEffect } from 'react';
import EarthquakeList from './components/EarthquakeList/EarthquakeList'
import useEarthquake from "./hooks/useEarthquake"
import './App.scss';
import EarthquakeFilter from './components/EarthquakeFilter/EarthquakeFilter';

function App() {
  const {state, fetch, changeFilter} = useEarthquake();
  const MINUTE_MS = 60000;

  useEffect(() => {
    fetch();
    const interval = setInterval(() => {
     fetch();
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, [fetch])

  return (
    
    <div className="App">
        <div className='header'>
          <EarthquakeFilter selectedFilter={state.selectedFilter} onClick={changeFilter}></EarthquakeFilter>
        </div>
        <div className='body'>
          <EarthquakeList earthquakes={state.earthquakes}></EarthquakeList>
        </div>
      </div>
  );
}

export default App;
