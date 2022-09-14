import React, { FC } from 'react';
import { Earthquake } from '../../models/Earthquake';
import GaugeChart from 'react-gauge-chart'
import "./EarthquakeList.scss"

export const EarthquakeItem: FC<{earthquake: Earthquake, onClick: (id: string) => void | null}> = (props) => {
  const {earthquake, onClick} = props;
  return (  
    <li onClick={() => onClick(earthquake.id)}>
      
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

const EarthquakeList: FC<{earthquakes:Earthquake[], onClick: (id: string) => void | null}> = (props) => {
  return (
      <ul>
        {props.earthquakes.map((item: Earthquake) => (<EarthquakeItem key={item.id} earthquake={item} onClick={(id: string) => props.onClick(id)}></EarthquakeItem>))}
      </ul>
  );
}

export default EarthquakeList;
