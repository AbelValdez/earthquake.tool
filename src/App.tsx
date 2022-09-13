import { useEffect } from 'react';
import EarthquakeList from './components/EarthquakeList'
import useEarthquake from "./hooks/useEarthquake"
import './App.css';

function App() {
  const {earthquakes, fetch} = useEarthquake();
  const MINUTE_MS = 60000;

  useEffect(() => {
    const interval = setInterval(() => {      
      fetch();
    }, MINUTE_MS);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="App">
      <EarthquakeList earthquakes={earthquakes}></EarthquakeList>      
    </div>
  );
}

export default App;
