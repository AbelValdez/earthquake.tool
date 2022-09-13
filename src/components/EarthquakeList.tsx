import React, { FC } from 'react';
import { Earthquake } from '../models/Earthquake';

export const EarthquakeItem: FC<{earthquake: Earthquake}> = ({ earthquake }) => {
  return (  
    <li>
      <span>
        {earthquake.properties.mag}
      </span>

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
