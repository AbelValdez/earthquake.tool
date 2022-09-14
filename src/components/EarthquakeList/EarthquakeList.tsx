import React, { FC } from 'react';
import { Earthquake } from '../../models/Earthquake';
import GaugeChart from 'react-gauge-chart'
import "./EarthquakeList.scss"

export const EarthquakeItem: FC<{earthquake: Earthquake}> = ({ earthquake }) => {
  return (  
    <li>
      
      <GaugeChart id="gauge-chart" 
        nrOfLevels={3} 
        percent={(earthquake.properties.mag/5)}        
        formatTextValue={ () => `${earthquake.properties.mag.toFixed(1)}`}
        textColor={"#0000ff"}
        needleColor={"#bbb"}
        />        
      <span>      
        {earthquake.properties.place}
      </span>
    </li>
  )
}

const EarthquakeList: FC<{earthquakes:Earthquake[]}> = (props) => {
  return (
      <ul>
        {props.earthquakes.map((item: Earthquake) => (<EarthquakeItem key={item.id} earthquake={item}></EarthquakeItem>))}
      </ul>
  );
}

export default EarthquakeList;
